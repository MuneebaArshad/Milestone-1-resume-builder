const skillsSection = document.getElementById('skills-section') as HTMLElement;
const toggleSkillsBtn = document.getElementById('toggle-skills-btn') as HTMLButtonElement;

// Initial state to show
let isSkillsVisible = true;

toggleSkillsBtn.addEventListener('click', () => {
  if (isSkillsVisible) {
    // Hide the skills section
    skillsSection.style.display = 'none';
    toggleSkillsBtn.textContent = 'Show Skills';
  } else {
    // Show the skills section
    skillsSection.style.display = 'block';
    toggleSkillsBtn.textContent = 'Hide Skills';
  }
  isSkillsVisible = !isSkillsVisible; // Toggle the visibility state
});
