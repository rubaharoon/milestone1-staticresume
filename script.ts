document.addEventListener('DOMContentLoaded',() => {
    const togglebutton = document.getElementById('togglebutton') as HTMLButtonElement|null;
    const aboutSkills = document.getElementById('skills') as HTMLElement|null;

    if (togglebutton && aboutSkills) {
        togglebutton.addEventListener('click', () => {
            if (aboutSkills.style.display === 'none') {
                aboutSkills.style.display = 'block';
                togglebutton.value= 'Hide Skills';
            } else {
                aboutSkills.style.display = 'none';
                togglebutton.value = 'Show Skills';
            }
        });
    } 
    else {
        console.log("Required elements not found in the DOM.");
    }

});