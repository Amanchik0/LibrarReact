import { makeAutoObservable, runInAction } from "mobx";
export default class BookStore {
  constructor() {
    this._janre = [
      { id: 1, name: "Besteller" },
      { id: 2, name: "Romance" },
      { id: 3, name: "Mystery" },
      { id: 4, name: "Science Fiction" },
      { id: 5, name: "Fantasy" },
      { id: 6, name: "Thriller" },
      { id: 7, name: "Historical Fiction" },
      { id: 8, name: "Biography" },
      { id: 9, name: "Self-Help" },
      { id: 10, name: "Humor" },
    ];
    this._country = [
      { id: 1, name: "Kazakhstan" },
      { id: 2, name: "somewhere" },
    ];
    this._book = [
      {
        id: 1,
        title: "Война и мир",
        price: 1200,
        author: "Лев Толстой",
        pageCount: 1000,
        img: "https://www.moscowbooks.ru/image/book/741/orig/i741097.jpg?cu=20220117094508",
        comments: [],
      },
      {
        id: 2,
        title: "1984",
        price: 800,
        author: "Джордж Оруэлл",
        pageCount: 300,
        img: "https://anylang.net/sites/default/files/covers/1984_1.jpg",
        comments: [],
        janre: { id: 2, name: "Mystery" },
        country: { id: 1, name: "Kazakhstan" },
      },
      {
        id: 3,
        title: "Мастер и Маргарита",
        price: 950,
        author: "Михаил Булгаков",
        pageCount: 400,
        img: "https://ir.ozone.ru/s3/multimedia-7/c1000/6610471207.jpg",
        comments: [],
        janre: { id: 1, name: "Bestseller" },
        country: { id: 1, name: "Kazakhstan" },
      },
      {
        id: 4,
        title: "Маленький принц",
        price: 500,
        author: "Антуан де Сент-Экзюпери",
        pageCount: 100,
        img: "https://simg.marwin.kz/media/catalog/product/cache/8d1771fdd19ec2393e47701ba45e606d/c/o/cover1_74_1237.jpg",
        comments: [],
        janre: { id: 1, name: "Bestseller" },
        country: { id: 1, name: "Kazakhstan" },
      },
      {
        id: 5,
        title: "Три товарища",
        price: 1100,
        author: "Эрих Мария Ремарк",
        pageCount: 400,
        img: "https://www.moscowbooks.ru/image/book/562/orig/i562567.jpg?cu=20220117101724",
        comments: [],
        janre: { id: 1, name: "Bestseller" },
        country: { id: 1, name: "Kazakhstan" },
      },
      {
        id: 6,
        title: "Алиса в стране чудес",
        price: 600,
        author: "Льюис Кэрролл",
        pageCount: 200,
        img: "https://catalog.detmir.st/media/sDwzvV2oHv3e25ikxt6Eysi2UMS2HC-zHzHcZgvcQ2w=?preset=site_product_gallery_r1500",
        comments: [],
        janre: { id: 1, name: "Bestseller" },
        country: { id: 1, name: "Kazakhstan" },
      },
      {
        id: 7,
        title: "Зов Ктулху",
        price: 850,
        author: "Говард Лавкрафт",
        pageCount: 250,
        img: "https://simg.marwin.kz/media/catalog/product/cache/8d1771fdd19ec2393e47701ba45e606d/c/o/cover1__w600_135_55.jpg",
        comments: [],
        janre: { id: 1, name: "Bestseller" },
        country: { id: 1, name: "Kazakhstan" },
      },
    ];

    this._selectedType = {};
    this._selectedCountry = {};
    this._toRead = false;
    this._bookToEdit = null;
    // this._page = 1;
    // this.totalCount = 0;
    // this.limit = 3;
    makeAutoObservable(this);
  }

  setToRead(bookId, value) {
    runInAction(() => {
      const book = this._book.find((b) => b.id === bookId);
      if (book) {
        book.toRead = value;
      }
    });
  }

  setJanre(janre) {
    this._janre = janre;
  }

  setCountry(country) {
    this._country = country;
  }

  setBook(book) {
    this._book = book;
  }

  setSelectedType(janre) {
    this._selectedType = janre;
  }

  setSelectedCountry(country) {
    this._selectedCountry = country;
  }

  set BookToEdit(book) {
    this._bookToEdit = book;
  }
  // setPage(page) {
  //   this._page = page;
  // }
  // setTotalCount(count) {
  //   this.totalCount = count;
  // }

  get bookToEdit() {
    return this._bookToEdit;
  }

  get toRead() {
    return this._toRead;
  }

  get janre() {
    return this._janre;
  }

  get country() {
    return this._country;
  }

  get book() {
    return this._book;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedCountry() {
    return this._selectedCountry;
  }
  // get totalCount() {
  //   return this._totalCount;
  // }
  // get page() {
  //   return this._page;
  // }
  // get limit() {
  //   return this._limit;
  // }
}
