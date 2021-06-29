class SkillsOverview {
  constructor(element, data) {
    this.element = element;
    this.data = data;

    this.load();

    const skills = Object.values(element.children);

    for (const skill of skills) {
      skill.onclick = () => this.selectSkill(skill);
    }

    if (skills.length > 0) this.selectSkill(skills[0]);
  }

  load() {
    for (const skill of this.data.skills) {
      const skillElement = createElement('div', { class: 'card pointer' });

      {
        const iconElement = createElement('i', { class: `uil ${skill.icon}` });
        skillElement.appendChild(iconElement);

        const nameElement = createElement('h3', { innerText: skill.name });
        skillElement.appendChild(nameElement);

        const timeElement = createElement('h4', {
          innerText: `More than ${skill.time} years`,
        });
        skillElement.appendChild(timeElement);

        const detailElement = createElement('div', { class: 'detail' });

        {
          for (const language of skill.details) {
            const languageElement = createElement('div', { class: 'language' });

            {
              const languageNameElement = createElement('p', {
                class: 'name',
                innerText: language.name,
              });
              languageElement.appendChild(languageNameElement);

              const languagePercentageElement = createElement('p', {
                class: 'percentage',
                innerText: `${language.percentage}%`,
              });
              languageElement.appendChild(languagePercentageElement);

              const languageBarElement = createElement('span', {
                class: 'bar',
              });
              languageBarElement.style.setProperty(
                '--width',
                `${language.percentage}%`
              );
              languageElement.appendChild(languageBarElement);
            }

            detailElement.appendChild(languageElement);
          }
        }

        skillElement.appendChild(detailElement);
      }

      this.element.appendChild(skillElement);
    }
  }

  selectSkill(skill) {
    if (this.selectedSkill != null)
      this.selectedSkill.classList.remove('selected');

    this.selectedSkill = skill;
    skill.classList.add('selected');
  }
}
