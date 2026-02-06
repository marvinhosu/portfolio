<?php
session_start([
    'cookie_httponly' => true,   // JavaScript cannot read the session cookie
    'cookie_secure'  => true,    // Cookie only sent over HTTPS
    'cookie_samesite' => 'Strict' // Cookie not sent on cross-site requests
]);

// =============================================================================
// Password Configuration (loaded from gitignored config.php)
// =============================================================================
require __DIR__ . '/config.php';

// =============================================================================
// Brute Force Protection (server-side, per session)
// =============================================================================
define('MAX_ATTEMPTS', 5);
define('LOCKOUT_SECONDS', 15 * 60); // 15 minutes

if (!isset($_SESSION['attempts'])) {
    $_SESSION['attempts'] = 0;
    $_SESSION['lockout_until'] = 0;
}

// CSRF token - one per session
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

$error = false;
$locked_out = false;
$remaining_attempts = MAX_ATTEMPTS - $_SESSION['attempts'];

// Check lockout
if ($_SESSION['lockout_until'] > time()) {
    $locked_out = true;
    $lockout_minutes = ceil(($_SESSION['lockout_until'] - time()) / 60);
} elseif ($_SESSION['lockout_until'] > 0) {
    // Lockout expired, reset
    $_SESSION['attempts'] = 0;
    $_SESSION['lockout_until'] = 0;
    $remaining_attempts = MAX_ATTEMPTS;
}

// =============================================================================
// Handle Login
// =============================================================================
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['password'])
    && isset($_POST['csrf_token']) && hash_equals($_SESSION['csrf_token'], $_POST['csrf_token'])) {
    if ($locked_out) {
        $error = true;
    } elseif (password_verify($_POST['password'], PASSWORD_HASH)) {
        session_regenerate_id(true); // Destroy old session, prevent fixation
        $_SESSION['authenticated'] = true;
        $_SESSION['attempts'] = 0;
        $_SESSION['lockout_until'] = 0;
        header('Location: /');
        exit;
    } else {
        $_SESSION['attempts']++;
        $remaining_attempts = MAX_ATTEMPTS - $_SESSION['attempts'];
        if ($_SESSION['attempts'] >= MAX_ATTEMPTS) {
            $_SESSION['lockout_until'] = time() + LOCKOUT_SECONDS;
            $locked_out = true;
            $lockout_minutes = ceil(LOCKOUT_SECONDS / 60);
        }
        $error = true;
    }
}

// Handle logout
if (isset($_GET['logout'])) {
    $_SESSION['authenticated'] = false;
    session_destroy();
    header('Location: /');
    exit;
}

// =============================================================================
// If Authenticated: Serve Portfolio
// =============================================================================
if (isset($_SESSION['authenticated']) && $_SESSION['authenticated'] === true) {
    readfile(__DIR__ . '/index.html');
    exit;
}

// =============================================================================
// Login Page
// =============================================================================
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <meta name="robots" content="noindex, nofollow" />
    <title>Portfolio</title>
    <script>
        // Immediately hide the wrong language before page renders (prevents flash)
        (function() {
            var lang = localStorage.getItem('language') || 'en';
            var s = document.createElement('style');
            s.id = 'lang-style';
            s.textContent = lang === 'en'
                ? '[data-lang="de"]{display:none!important}'
                : '[data-lang="en"]{display:none!important}';
            document.head.appendChild(s);
        })();
    </script>
    <style>
        @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 300 700;
            font-display: swap;
            src: url('/fonts/inter-latin.woff2') format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 300 700;
            font-display: swap;
            src: url('/fonts/inter-latin-ext.woff2') format('woff2');
            unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
            font-family: 'Inter', system-ui, sans-serif;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f9fafb;
            color: #111827;
            -webkit-font-smoothing: antialiased;
        }

        .card {
            width: 100%;
            max-width: 28rem;
            margin: 1rem;
            padding: 2rem;
            background: #fff;
            border-radius: 1rem;
            box-shadow: 0 20px 25px -5px rgba(0,0,0,.1), 0 8px 10px -6px rgba(0,0,0,.1);
            border: 1px solid #e5e7eb;
        }

        h1 { font-size: 1.875rem; font-weight: 700; margin-bottom: 0.5rem; }
        .subtitle { color: #4b5563; margin-bottom: 1.5rem; }

        .form-group { margin-bottom: 1rem; }

        input[type="password"] {
            width: 100%;
            padding: 0.75rem 1rem;
            border: 1px solid #d1d5db;
            border-radius: 0.5rem;
            font-size: 1rem;
            font-family: inherit;
            background: #fff;
            color: #111827;
            outline: none;
            transition: border-color 0.15s, box-shadow 0.15s;
        }
        input[type="password"]:focus {
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59,130,246,0.15);
        }

        button {
            width: 100%;
            padding: 0.75rem 1rem;
            background: #111827;
            color: #fff;
            border: none;
            border-radius: 0.5rem;
            font-size: 1rem;
            font-weight: 500;
            font-family: inherit;
            cursor: pointer;
            transition: background 0.15s;
        }
        button:hover { background: #1f2937; }

        .error {
            margin-top: 1rem;
            font-size: 0.875rem;
            color: #dc2626;
        }

        .lang-toggle {
            position: fixed;
            top: 1.5rem;
            right: 6rem;
            width: 2.75rem;
            height: 2.75rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #fff;
            border: 1px solid #e5e7eb;
            border-radius: 50%;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,.1);
            cursor: pointer;
            font-size: 0.75rem;
            font-weight: 600;
            color: #1f2937;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .lang-toggle:hover { transform: scale(1.05); box-shadow: 0 10px 15px -3px rgba(0,0,0,.1); }

        .theme-toggle {
            position: fixed;
            top: 1.5rem;
            right: 1.5rem;
            width: 2.75rem;
            height: 2.75rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #fff;
            border: 1px solid #e5e7eb;
            border-radius: 50%;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,.1);
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .theme-toggle:hover { transform: scale(1.05); box-shadow: 0 10px 15px -3px rgba(0,0,0,.1); }
        .theme-toggle svg { width: 1.25rem; height: 1.25rem; fill: #1f2937; }

        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .shake { animation: shake 0.5s; }

        /* Dark mode (class-based, matches portfolio toggle) */
        html.dark body { background-color: #111827; color: #f3f4f6; }
        html.dark .card { background: #1f2937; border-color: #374151; }
        html.dark .subtitle { color: #9ca3af; }
        html.dark input[type="password"] {
            background: #374151; border-color: #4b5563; color: #f3f4f6;
        }
        html.dark input[type="password"]::placeholder { color: #9ca3af; }
        html.dark input[type="password"]:focus { border-color: #60a5fa; box-shadow: 0 0 0 3px rgba(96,165,250,0.15); }
        html.dark button[type="submit"] { background: #f3f4f6; color: #111827; }
        html.dark button[type="submit"]:hover { background: #e5e7eb; }
        html.dark .error { color: #f87171; }
        html.dark .lang-toggle { background: #1f2937; border-color: #374151; color: #e5e7eb; }
        html.dark .theme-toggle { background: #1f2937; border-color: #374151; }
        html.dark .theme-toggle svg { fill: #e5e7eb; }
    </style>
</head>
<body>
    <div class="theme-toggle" id="theme-toggle">
        <!-- Sun icon (shown in dark mode, click to go light) -->
        <svg id="icon-sun" style="display:none" viewBox="0 0 20 20">
            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"/>
        </svg>
        <!-- Moon icon (shown in light mode, click to go dark) -->
        <svg id="icon-moon" style="display:none" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
        </svg>
    </div>
    <div class="lang-toggle" id="lang-toggle">EN</div>

    <div class="card">
        <h1 data-lang="en">Welcome</h1>
        <h1 data-lang="de">Willkommen</h1>
        <p class="subtitle" data-lang="en">Please enter the password to view this portfolio.</p>
        <p class="subtitle" data-lang="de">Bitte geben Sie das Passwort ein, um dieses Portfolio anzuzeigen.</p>

        <form method="POST" id="login-form">
            <input type="hidden" name="csrf_token" value="<?= htmlspecialchars($_SESSION['csrf_token']) ?>" />
            <div class="form-group">
                <input
                    type="password"
                    name="password"
                    id="password-input"
                    data-placeholder-en="Enter password"
                    data-placeholder-de="Passwort eingeben"
                    placeholder="Enter password"
                    autofocus
                    required
                />
            </div>
            <button type="submit" data-lang="en">Enter</button>
            <button type="submit" data-lang="de">Bestätigen</button>

            <?php if ($error): ?>
                <p class="error" data-lang="en">
                    <?php if ($locked_out): ?>
                        Too many attempts. Please try again in <?= $lockout_minutes ?> minute<?= $lockout_minutes !== 1 ? 's' : '' ?>.
                    <?php else: ?>
                        Incorrect password. <?= $remaining_attempts ?> attempt<?= $remaining_attempts !== 1 ? 's' : '' ?> remaining.
                    <?php endif; ?>
                </p>
                <p class="error" data-lang="de">
                    <?php if ($locked_out): ?>
                        Zu viele Versuche. Bitte versuchen Sie es in <?= $lockout_minutes ?> Minute<?= $lockout_minutes !== 1 ? 'n' : '' ?> erneut.
                    <?php else: ?>
                        Falsches Passwort. Noch <?= $remaining_attempts ?> Versuch<?= $remaining_attempts !== 1 ? 'e' : '' ?>.
                    <?php endif; ?>
                </p>
            <?php endif; ?>
        </form>
    </div>

    <script>
        (function() {
            var currentLang = localStorage.getItem('language') || 'en';
            if (currentLang !== 'en' && currentLang !== 'de') currentLang = 'en';

            function applyLang(lang) {
                // Replace the style element to hide the opposite language
                var existing = document.getElementById('lang-style');
                if (existing) existing.remove();
                var s = document.createElement('style');
                s.id = 'lang-style';
                s.textContent = lang === 'en'
                    ? '[data-lang="de"]{display:none!important}'
                    : '[data-lang="en"]{display:none!important}';
                document.head.appendChild(s);

                document.getElementById('lang-toggle').textContent = lang.toUpperCase();
                document.documentElement.setAttribute('lang', lang);
                var input = document.getElementById('password-input');
                input.placeholder = input.getAttribute('data-placeholder-' + lang);
            }

            applyLang(currentLang);

            document.getElementById('lang-toggle').addEventListener('click', function() {
                currentLang = currentLang === 'en' ? 'de' : 'en';
                localStorage.setItem('language', currentLang);
                applyLang(currentLang);
            });

            // Theme toggle
            var iconSun = document.getElementById('icon-sun');
            var iconMoon = document.getElementById('icon-moon');

            function applyTheme(theme) {
                if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    iconSun.style.display = 'block';
                    iconMoon.style.display = 'none';
                } else {
                    document.documentElement.classList.remove('dark');
                    iconSun.style.display = 'none';
                    iconMoon.style.display = 'block';
                }
            }

            var currentTheme = localStorage.getItem('theme');
            if (!currentTheme) {
                currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }
            applyTheme(currentTheme);

            document.getElementById('theme-toggle').addEventListener('click', function() {
                currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
                localStorage.setItem('theme', currentTheme);
                applyTheme(currentTheme);
            });

            <?php if ($error): ?>
            document.getElementById('login-form').classList.add('shake');
            setTimeout(function() { document.getElementById('login-form').classList.remove('shake'); }, 500);
            <?php endif; ?>
        })();
    </script>
</body>
</html>
