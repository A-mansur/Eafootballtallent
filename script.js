document.addEventListener('DOMContentLoaded', () => {
    const playerTab = document.getElementById('player__tab');
    const clubTab = document.getElementById('club__tab');
    const playerForm = document.getElementById('player__form');
    const clubForm = document.getElementById('club__form');

    const form = document.getElementById('player__form');
    const indicator = document.getElementById('fromScrollIndicator');

    // Function to switch to player Form
    const showPlayerForm = () => {
        playerTab.classList.add('active');
        clubTab.classList.remove('active');

        playerForm.classList.add('active');
        clubForm.classList.remove('active');
    };

    // Function to switch to club form
    const showClubForm = () => {
        clubTab.classList.add('active');
        playerTab.classList.remove('active');

        clubForm.classList.add('active');
        playerForm.classList.remove('active');
    };

    // Event listner for the tabs
    playerTab.addEventListener('click', showPlayerForm);
    clubTab.addEventListener('click', showClubForm);

    // Initial state check ( Optianal, but good practice)
    if (playerTab.classList.contains('active')) {
        showPlayerForm();
    } else if (clubTab.classList.contains('active')) {
        showClubForm();
    } else {
        showPlayerForm();
    }

    if (form && indicator) {
        form.addEventListener('scroll', () => {
            const scrollHeight = form.scrollHeight - form.clientHeight;
            const scrollPosition = form.scrollTop;

            if (scrollPosition > 20 || scrollPosition >= scrollHeight - 10) {
                indicator.classList.add('hide');
            } else {
                indicator.classList.remove('hide');
            }
        });
    }
});