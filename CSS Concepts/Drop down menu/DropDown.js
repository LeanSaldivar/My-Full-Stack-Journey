document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]');

    // If we clicked inside a dropdown menu (not on the button), do nothing
    if (!isDropdownButton && e.target.closest('[data-dropdown-menu]')) return;

    let currentDropdown;

    // If we clicked on a dropdown button, toggle its active state
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
    }

    // Close any other active dropdowns
    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown !== currentDropdown) {
            dropdown.classList.remove('active');
        }
    });
});