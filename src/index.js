import '../src/styles.css'

const toggleButton = document.querySelector('.menu-toggle-button')

toggleButton.addEventListener('click', (event) => {
    let sidebarWidth = document.documentElement.style.getPropertyValue('--sidebar-width');

    // First Button Click
    if (!sidebarWidth) {
        sidebarWidth = getComputedStyle(document.documentElement, null).getPropertyValue('--sidebar-width');
    }

    if (sidebarWidth.startsWith("max")) {
        document.documentElement.style.setProperty('--sidebar-width', '0px');
        document.documentElement.style.setProperty('--sidebar-padding', '0px');
    } else {
        document.documentElement.style.setProperty('--sidebar-width', 'max(300px, calc(100% / 6))');
        document.documentElement.style.setProperty('--sidebar-padding', '2rem');
    }
})
