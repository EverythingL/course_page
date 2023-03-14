let courses = fetch('./assets/courses.json')
courses
  .then(response => response.json())
  .then(result => {
    const courses = result.courses;
    const pageNum = +(new URL(document.location).searchParams.get('page') || 1);
    
    for (let i = 0; i < 10; i++) {
      new CourseCard(courses[i])
    }
    
    // console.log(result)
  })
  .finally(() => {
    const preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';
  })

