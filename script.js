document.addEventListener('DOMContentLoaded', function () {
    var togglebutton = document.getElementById('togglebutton');
    var aboutSkills = document.getElementById('skills');
    if (togglebutton && aboutSkills) {
        togglebutton.addEventListener('click', function () {
            if (aboutSkills.style.display === 'none') {
                aboutSkills.style.display = 'block';
                togglebutton.value = 'Hide Skills';
          }
            else {
                aboutSkills.style.display = 'none';
                togglebutton.value = 'Show Skills';
            }
        });
    }
    else {
        console.log("Required elements not found in the DOM.");
    }
});

