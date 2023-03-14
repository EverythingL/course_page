class CourseCard {
  constructor(data) {
    this.data = data;

    console.log(this.data);
    this.renderCard()
  }

  renderCard() {
    const {title, id, description, lessonsCount, rating, previewImageLink} = this.data;
    const skills = this.data.meta.skills;
    const card = document.createElement('div');
    card.classList.add('course-card');

    const titleBlock = document.createElement('h3');
    titleBlock.classList.add('course-title')
    titleBlock.innerHTML = title;

    const descriptionBlock = document.createElement('p');
    descriptionBlock.classList.add('course-description')
    descriptionBlock.innerHTML = description;

    const lessonsBlock = document.createElement('span');
    lessonsBlock.classList.add('course-lessons-count');
    lessonsBlock.innerHTML = `${lessonsCount} lessons`;

    const ratingBlock = document.createElement('div');
    const width = rating * 20;
    ratingBlock.classList.add('rating-wrapper');
    ratingBlock.style = `--rating-value: ${rating}; --width: ${width}%`;
    ratingBlock.innerHTML = `
    <div class="rating-svg">
      <span class="rating-full"><svg class="icon icon--rating-full" width="102" height="18" viewBox="0 0 102 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1.09416L11.2638 5.50054L11.3792 5.72527L11.6286 5.76563L16.5189 6.55696L13.0277 10.0716L12.8497 10.2508L12.8884 10.5005L13.6469 15.396L9.2255 13.1617L9 13.0478L8.7745 13.1617L4.35306 15.396L5.11163 10.5005L5.15032 10.2508L4.97227 10.0716L1.4811 6.55696L6.37136 5.76563L6.62077 5.72527L6.73623 5.50054L9 1.09416Z" fill="currentColor" stroke="currentColor"></path><path d="M30 1.09416L32.2638 5.50054L32.3792 5.72527L32.6286 5.76563L37.5189 6.55696L34.0277 10.0716L33.8497 10.2508L33.8884 10.5005L34.6469 15.396L30.2255 13.1617L30 13.0478L29.7745 13.1617L25.3531 15.396L26.1116 10.5005L26.1503 10.2508L25.9723 10.0716L22.4811 6.55696L27.3714 5.76563L27.6208 5.72527L27.7362 5.50054L30 1.09416Z" fill="currentColor" stroke="currentColor"></path><path d="M51 1.09416L53.2638 5.50054L53.3792 5.72527L53.6286 5.76563L58.5189 6.55696L55.0277 10.0716L54.8497 10.2508L54.8884 10.5005L55.6469 15.396L51.2255 13.1617L51 13.0478L50.7745 13.1617L46.3531 15.396L47.1116 10.5005L47.1503 10.2508L46.9723 10.0716L43.4811 6.55696L48.3714 5.76563L48.6208 5.72527L48.7362 5.50054L51 1.09416Z" fill="currentColor" stroke="currentColor"></path><path d="M72 1.09416L74.2638 5.50054L74.3792 5.72527L74.6286 5.76563L79.5189 6.55696L76.0277 10.0716L75.8497 10.2508L75.8884 10.5005L76.6469 15.396L72.2255 13.1617L72 13.0478L71.7745 13.1617L67.3531 15.396L68.1116 10.5005L68.1503 10.2508L67.9723 10.0716L64.4811 6.55696L69.3714 5.76563L69.6208 5.72527L69.7362 5.50054L72 1.09416Z" fill="currentColor" stroke="currentColor"></path><path d="M93 1.09416L95.2638 5.50054L95.3792 5.72527L95.6286 5.76563L100.519 6.55696L97.0277 10.0716L96.8497 10.2508L96.8884 10.5005L97.6469 15.396L93.2255 13.1617L93 13.0478L92.7745 13.1617L88.3531 15.396L89.1116 10.5005L89.1503 10.2508L88.9723 10.0716L85.4811 6.55696L90.3714 5.76563L90.6208 5.72527L90.7362 5.50054L93 1.09416Z" fill="currentColor" stroke="currentColor"></path></svg></span>
      <span class="rating-empty"><svg class="icon icon--rating-empty" width="102" height="18" viewBox="0 0 102 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1.09416L11.2638 5.50054L11.3792 5.72527L11.6286 5.76563L16.5189 6.55696L13.0277 10.0716L12.8497 10.2508L12.8884 10.5005L13.6469 15.396L9.2255 13.1617L9 13.0478L8.7745 13.1617L4.35306 15.396L5.11163 10.5005L5.15032 10.2508L4.97227 10.0716L1.4811 6.55696L6.37136 5.76563L6.62077 5.72527L6.73623 5.50054L9 1.09416Z" fill="none" stroke="currentColor"></path><path d="M30 1.09416L32.2638 5.50054L32.3792 5.72527L32.6286 5.76563L37.5189 6.55696L34.0277 10.0716L33.8497 10.2508L33.8884 10.5005L34.6469 15.396L30.2255 13.1617L30 13.0478L29.7745 13.1617L25.3531 15.396L26.1116 10.5005L26.1503 10.2508L25.9723 10.0716L22.4811 6.55696L27.3714 5.76563L27.6208 5.72527L27.7362 5.50054L30 1.09416Z" fill="none" stroke="currentColor"></path><path d="M51 1.09416L53.2638 5.50054L53.3792 5.72527L53.6286 5.76563L58.5189 6.55696L55.0277 10.0716L54.8497 10.2508L54.8884 10.5005L55.6469 15.396L51.2255 13.1617L51 13.0478L50.7745 13.1617L46.3531 15.396L47.1116 10.5005L47.1503 10.2508L46.9723 10.0716L43.4811 6.55696L48.3714 5.76563L48.6208 5.72527L48.7362 5.50054L51 1.09416Z" fill="none" stroke="currentColor"></path><path d="M72 1.09416L74.2638 5.50054L74.3792 5.72527L74.6286 5.76563L79.5189 6.55696L76.0277 10.0716L75.8497 10.2508L75.8884 10.5005L76.6469 15.396L72.2255 13.1617L72 13.0478L71.7745 13.1617L67.3531 15.396L68.1116 10.5005L68.1503 10.2508L67.9723 10.0716L64.4811 6.55696L69.3714 5.76563L69.6208 5.72527L69.7362 5.50054L72 1.09416Z" fill="none" stroke="currentColor"></path><path d="M93 1.09416L95.2638 5.50054L95.3792 5.72527L95.6286 5.76563L100.519 6.55696L97.0277 10.0716L96.8497 10.2508L96.8884 10.5005L97.6469 15.396L93.2255 13.1617L93 13.0478L92.7745 13.1617L88.3531 15.396L89.1116 10.5005L89.1503 10.2508L88.9723 10.0716L85.4811 6.55696L90.3714 5.76563L90.6208 5.72527L90.7362 5.50054L93 1.09416Z" fill="none" stroke="currentColor"></path></svg></span>
    </div>
    <div class="rating-text">
      ${rating} Rating
    </div>`; 

    const courseImg = document.createElement('img');
    courseImg.src = previewImageLink + '/cover.webp';
    courseImg.classList.add('course-image');

    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('course-img-wrapper');
    imageWrapper.appendChild(courseImg)

    const courseUrl = document.createElement('a');
    courseUrl.href = id;

    const skillsWrapper = document.createElement('ul');
    skillsWrapper.classList.add('course-skills');
    for (let i = 0; i < skills.length; i++) {
      if (i === 0) {
        const skillsTitle = document.createElement('li');
        skillsTitle.classList.add('skill-title')
        skillsTitle.innerHTML = 'Course goals'
        skillsWrapper.appendChild(skillsTitle)
      }
      const skill = document.createElement('li');
      skill.innerHTML = skills[i];
      skillsWrapper.appendChild(skill)
    }

    card.appendChild(titleBlock)
    card.appendChild(descriptionBlock)
    card.appendChild(lessonsBlock)
    if (skills.length) card.appendChild(skillsWrapper)
    card.appendChild(ratingBlock)
    card.appendChild(imageWrapper)
    card.appendChild(courseUrl)

    console.log(skills);

    document.querySelector('.course-wrapper').appendChild(card);
  }
}