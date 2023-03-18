const courseWrapper = document.querySelector('.courses-wrapper');

fetch(`${COURSES_URL}`, requestOptions)
  .then(response => response.json())
  .then(result => {
    if (result.error) {
      courseWrapper.innerHTML += `<div class="error">${result.error.header}. Try again later</div>`
    }
    
    const courses = result.courses;
    window.courses = courses;
    renderPage(courses)
  })
  .catch(error => {
    courseWrapper.innerHTML += '<div class="error">Something went wrong, please try again later</div>'
    console.log(error);
  })
  .finally(() => {
    const preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';
  })

function renderPage(courses, clearTrash = false) {
  new CourseCard(courses, clearTrash)
}

window.addEventListener('custom:paginateTrigger', () => {
  renderPage(window.courses, true)
});
