let firstLogin = true;

if (sessionStorage.getItem('firstLogin') === null) {
    sessionStorage.setItem('firstLogin', 'true');
} else {
    firstLogin = sessionStorage.getItem('firstLogin') === 'true';
}

console.log(firstLogin);

export function checkFirstLogin() {
    if (firstLogin === true) {
        cover.style.display = 'flex'
        setTimeout(() => {
            logo_mb.style.opacity = '0'
            cover.style.backgroundColor = 'rgb(241, 241, 241, 0)';
            cover_logo.style.width = '48.88px';
            cover_logo.style.height = '33px';

            cover_logo.style.transition = 'all .5s ease-in';
            setTimeout(() => {
                logo_mb.style.opacity = '1';
                cover.style.display = 'none';
            }, 500);

        }, 1500);
        sessionStorage.setItem('firstLogin', 'false');
    }

    console.log(firstLogin);
}

setTimeout(() => {
    console.log(firstLogin);
}, 500);
