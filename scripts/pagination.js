class Pagination {
  constructor(courses, clearTrash = false) {
    this.courses = courses;
    this.paginationWrapper = document.querySelector('.pagination-wrapper');
    this.clearTrash = clearTrash;
    this.addPagination(this.clearTrash)
  }

  addPagination(clearTrash) {
    if (clearTrash) this.paginationWrapper.innerHTML = '';

    const currentPage = +(new URL(document.location).searchParams.get('page') || 1);
    this.paginationCount = Math.ceil(this.courses.length / 10)

    for (let i = 0; i < this.paginationCount; i++) {
      const paginateItemWrapper = document.createElement('div');
      paginateItemWrapper.classList.add('paginate-item-wrapper');

      const paginateItem = document.createElement('button');
      paginateItem.classList.add('paginate-item')
      paginateItem.setAttribute('data-paginate', i + 1)
      paginateItem.innerHTML = i + 1;

      if ((i + 1) === currentPage) {
        paginateItem.classList.add('active')
      }

      this.eventListener(paginateItem)
      paginateItemWrapper.appendChild(paginateItem)
      this.paginationWrapper.appendChild(paginateItemWrapper)
    }
  }

  eventListener(item) {
    item.addEventListener('click', () => {
      const pageNum = +(new URL(document.location).searchParams.get('page') || 1);
      const dataPaginate = item.getAttribute('data-paginate')
      if (pageNum == dataPaginate) return;
      this.setURL(dataPaginate)
    })
  }

  setURL(paginateNum, dispathEvent = true) {
    history.pushState({}, "", `${window.location.origin}${window.location.pathname}?page=${paginateNum}`);
    if (!dispathEvent) return;
    window.dispatchEvent(new CustomEvent('custom:paginateTrigger'));
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}