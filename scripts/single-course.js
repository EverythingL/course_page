class SingleCourse {
  constructor(id) {
    this.id = id;
    console.log(this.id);
    if (!this.id || this.id == '') document.location = '/index.html';

    this.fetchCourseInfo()
    document.getElementById('btn_back').addEventListener('click', () => window.history.back())
  }

  fetchCourseInfo() {
    const courseWrapper = document.querySelector('.course-wrapper');

    fetch(`${MOCK_URL}${COURSES_URL}/${this.id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.error) {
          courseWrapper.innerHTML += `<div class="error">${result.error.header}. Try again later</div>`;
          return
        }
        this.renderCourseInfo(result)
      })
      .catch(error => {
        courseWrapper.innerHTML += '<div class="error">Something went wrong, please try again later</div>'
        console.log(error);
      })
      .finally(() => {
        const preloader = document.querySelector('.preloader');
        preloader.style.display = 'none';
      })
  }

  renderCourseInfo(data) {
    const {title} = data;
    console.log(data);

    document.querySelector('.container h1').innerHTML = title;
    document.querySelector('head title').innerHTML = title;
  }

  courseEventListeners() {

  }
}

new SingleCourse(new URL(document.location).searchParams.get('data-id'))