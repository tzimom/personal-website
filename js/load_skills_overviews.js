const loadSkillsOverviews = async () => {
  const data = await (await fetch('/data/skills.json')).json();

  const overviewElements = document.querySelectorAll('.skills__overview');

  for (const element of overviewElements) {
    new SkillsOverview(element, data);
  }
};

loadSkillsOverviews();
