class SingleCourse {
  constructor(id) {
    this.id = id;
    this.btnBack = document.getElementById('btn_back');
    this.btnBack.addEventListener('click', () => this.backToPreviousPage())
    
    this.courseWrapper = document.querySelector('.course-wrapper');
    this.pageOverlay = document.getElementById('page-overlay')
    if (!this.id || this.id == '') this.backToPreviousPage()

    this.fetchCourseInfo()
  }

  fetchCourseInfo() {
    fetch(`${COURSES_URL}/${this.id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.error) {
          this.courseWrapper.innerHTML += `<div class="error">${result.error.header}. Try again later</div>`;
          return
        }
        this.renderCourseInfo(result)
      })
      .catch(error => {
        this.courseWrapper.innerHTML += '<div class="error">Something went wrong, please try again later</div>'
        console.log(error);
      })
      .finally(() => {
        const preloader = document.querySelector('.preloader');
        preloader.style.display = 'none';
      })
  }

  renderCourseInfo(data) {
    const {title, description, rating, previewImageLink} = data;

    document.getElementById('title').innerHTML = title;
    document.querySelector('head title').innerHTML = title;

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

    const descriptionBlock = document.createElement('div');
    descriptionBlock.classList.add('course-description')
    descriptionBlock.innerHTML = `<p>${description}</p>`;
    descriptionBlock.appendChild(ratingBlock)

    const courseImg = document.createElement('img');
    const imageWrapper = document.createElement('div');
    courseImg.src = previewImageLink + '/cover.webp';
    courseImg.classList.add('course-image');
    imageWrapper.classList.add('course-img-wrapper');
    imageWrapper.appendChild(courseImg)

    this.courseWrapper.appendChild(descriptionBlock)
    this.courseWrapper.appendChild(imageWrapper)
    this.renderLessonsBlock(data);
  }

  renderLessonsBlock(data) {
    const {lessons} = data;
    const lessonsBlock = document.createElement('div');
    lessonsBlock.classList.add('course-lessons');

    const lessonsWrapper = document.createElement('div');
    lessonsWrapper.classList.add('course-lessons-wrapper');

    const lessonsBlockTitle = document.createElement('h2');
    lessonsBlockTitle.classList.add('course-lessons-title')
    lessonsBlockTitle.innerHTML = 'Lessons';

    lessonsBlock.appendChild(lessonsBlockTitle)

    for (let i = 0; i < lessons.length; i++) {
      const {previewImageLink, status, title, order, duration, type} = lessons[i];
      if (type !== 'video') return;
      const {link} = lessons[i];
      const lessonCard = document.createElement('div');
      const videoPosterSrc = `${previewImageLink}/lesson-${order}.webp`;
      lessonCard.classList.add('lesson-card');

      const titleDiv = document.createElement('h3')
      titleDiv.classList.add('lesson-title');
      titleDiv.innerHTML = `Lesson ${i + 1}: ${title}`;

      const modalTitle = document.createElement('h4')
      modalTitle.classList.add('lesson-video-modal-title');
      modalTitle.innerHTML = `Lesson ${i + 1}: ${title}`;

      const video = createVideo({src: link, muted: false, controls: status !== 'locked', poster: videoPosterSrc});
      const videoWrapper = document.createElement('div');
      const videoModal = document.createElement('div');
      const videoPreviewImageWrapper = document.createElement('div');
      const openVideoModalBtn = document.createElement('button');
      const closeVideoModalBtn = document.createElement('button');
      const videoPreviewImage = document.createElement('img');
      const continueWatchWrapper = document.createElement('div');
      const changeSpeedInfo = document.createElement('div');
      const videoProgressBar = document.createElement('div');
      
      video.id = `${this.id}_${order}`
      videoWrapper.classList.add('lesson-video-wrapper');
      videoModal.classList.add('lesson-video-modal');
      videoModal.ariaHidden = true;
      videoPreviewImageWrapper.classList.add('video-preview-wrapper');
      openVideoModalBtn.classList.add('video-preview-btn');
      openVideoModalBtn.setAttribute('data-open', true);
      closeVideoModalBtn.classList.add('close-btn');
      closeVideoModalBtn.setAttribute('data-open', false);
      videoPreviewImage.classList.add('video-preview-image');
      continueWatchWrapper.classList.add('continue-watch-wrapper');
      changeSpeedInfo.classList.add('change-speed-info');
      changeSpeedInfo.innerHTML = `You can change the playback speed to enter "Alt + '+'" to play faster or "Alt + '-'" to slow down. <span>Current speed <span id="video-speed">1</span>x.</span> To reset the speed to default, press "Alt + '0'".`
      videoProgressBar.classList.add('video-progress-bar');

      if (status == 'locked') {
        openVideoModalBtn.setAttribute('disabled', '')
        openVideoModalBtn.setAttribute('title', 'The lesson is not available for review')
      } else {
        videoPreviewImageWrapper.appendChild(videoProgressBar)
        this.updateProgressBar(video, duration, videoProgressBar, videoPreviewImageWrapper)
      }

      videoPreviewImage.src = videoPosterSrc;
      lessonCard.appendChild(titleDiv)
      videoPreviewImageWrapper.appendChild(videoPreviewImage)
      videoPreviewImageWrapper.appendChild(openVideoModalBtn)

      videoModal.appendChild(modalTitle)
      videoModal.appendChild(closeVideoModalBtn)
      videoModal.appendChild(video)
      videoModal.appendChild(continueWatchWrapper)
      videoModal.appendChild(changeSpeedInfo)
      videoWrapper.appendChild(videoPreviewImageWrapper)
      videoWrapper.appendChild(videoModal)

      lessonCard.appendChild(videoWrapper);
      lessonsWrapper.appendChild(lessonCard)
    }

    lessonsBlock.appendChild(lessonsWrapper)
    this.courseWrapper.appendChild(lessonsBlock)
    this.courseEventListeners();
  }

  courseEventListeners() {
    const toggleModalBtns = document.querySelectorAll('.lesson-card [data-open]');
    toggleModalBtns.forEach(btn => btn.addEventListener('click', (e) => toggleModal(e)));
    this.pageOverlay.addEventListener('click', () => closeAllModals());
    document.querySelectorAll('.lesson-video-modal video').forEach(video => this.videoEventListeners(video));

    const toggleModal = (e) => {
      const modal = e.target.closest('.lesson-card').querySelector('.lesson-video-modal');
      const video = modal.querySelector('video');
      const bool = e.target.closest('button').getAttribute('data-open') == 'true' ? true : false;
      if (bool == false) video.pause() 
      else {
        video.play();
        video.focus();
      }
      modal.ariaHidden = !bool;
      this.pageOverlay.ariaHidden = !bool;
      document.body.setAttribute('overflow-hidden', bool);
    }

    const closeAllModals = () => {
      document.querySelectorAll('.lesson-video-modal').forEach(modal => {
        modal.querySelector('video').pause();
        modal.ariaHidden = true;
      })
      this.pageOverlay.ariaHidden = true;
      document.body.setAttribute('overflow-hidden', false);
    }
  }

  videoEventListeners(video) {
    video.addEventListener("play", (e) => {
      const video = e.target;
      const videoId = e.target.id;
      const continueWatchWrapper = video.closest('.lesson-video-modal').querySelector('.continue-watch-wrapper')
      if (!localStorage.hasOwnProperty(videoId)) return
      const continueWatchBtn = document.createElement('button');
      let minutes = Math.floor(localStorage.getItem(videoId) / 60);
      let seconds = Math.floor(localStorage.getItem(videoId) % 60);
      minutes < 10 ? minutes = `0${minutes}` : minutes = minutes;
      seconds < 10 ? seconds = `0${seconds}` : seconds = seconds;
      const currentTime = `${minutes}:${seconds}`;

      continueWatchWrapper.innerHTML = '';
      continueWatchBtn.classList.add('continue-watch');
      continueWatchBtn.innerHTML = `Continue watching from ${currentTime}`
      continueWatchWrapper.appendChild(continueWatchBtn)

      continueWatchBtn.addEventListener('click', () => {
        video.focus();
        continueWatchWrapper.innerHTML = '';
        video.currentTime = localStorage.getItem(videoId);
      })
    }, {once: true});

    video.addEventListener("pause", (e) => {
      const video = e.target;
      const continueWatchWrapper = video.closest('.lesson-video-modal').querySelector('.continue-watch-wrapper')

      continueWatchWrapper.innerHTML = '';
    });

    video.addEventListener('keydown', (e) => {
      const modal = e.target.closest('.lesson-video-modal');
      if (e.altKey && e.keyCode == 48) video.playbackRate = 1
      if (e.keyCode == 189 && video.playbackRate > .25) video.playbackRate -= .25
      if (e.keyCode == 187 && video.playbackRate < 3) video.playbackRate += .25
      modal.querySelector('#video-speed').innerHTML = video.playbackRate
    })

    video.addEventListener("timeupdate", (e) => {
      const videoId = e.target.id;
      const currentTime = (e.target.currentTime).toFixed(1)
      const videoProgressBar = video.closest('.lesson-card').querySelector('.video-progress-bar')
      const videoPreviewImageWrapper = video.closest('.lesson-card').querySelector('.video-preview-wrapper')
      const continueWatchWrapper = video.closest('.lesson-video-modal').querySelector('.continue-watch-wrapper')

      this.updateProgressBar(video, video.duration, videoProgressBar, videoPreviewImageWrapper)
      if (continueWatchWrapper.innerHTML === '') localStorage.setItem(videoId, currentTime)
    });
  }

  updateProgressBar(video, duration, videoProgressBar, videoPreviewImageWrapper) {
    if (!localStorage.hasOwnProperty(video.id)) return;
    videoProgressBar.innerHTML = '';
    const progress = (localStorage.getItem(video.id) / duration * 100).toFixed(1)
    let visibleClass = '';
    progress >= 10 ? visibleClass = 'show' : visibleClass = '';
    videoProgressBar.setAttribute('style', `--width: ${progress}%`)
    videoProgressBar.innerHTML = `<div class="progress-bar ${visibleClass}" title="Video progress">${progress}%</div>`
    videoPreviewImageWrapper.appendChild(videoProgressBar)
  }

  backToPreviousPage() {
    if (window.history.length === 1) window.location = document.location.pathname.substring(0, document.location.pathname.indexOf('html'))
    else window.history.back()
  }
}

new SingleCourse(new URL(document.location).searchParams.get('data-id'))