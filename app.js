var skillsSection = document.getElementById('skills-section');
var toggleSkillsBtn = document.getElementById('toggle-skills-btn');
// Initial state to show
var isSkillsVisible = true;
toggleSkillsBtn.addEventListener('click', function () {
    if (isSkillsVisible) {
        // Hide the skills section
        skillsSection.style.display = 'none';
        toggleSkillsBtn.textContent = 'Show Skills';
    }
    else {
        // Show the skills section
        skillsSection.style.display = 'block';
        toggleSkillsBtn.textContent = 'Hide Skills';
    }
    isSkillsVisible = !isSkillsVisible; // Toggle the visibility state
});
