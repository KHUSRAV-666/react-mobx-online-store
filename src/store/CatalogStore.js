import { makeAutoObservable } from "mobx";

class CatalogStore {
  _categories = [];
  _brands = [];
  _products = [];
  _favorites = [];
  _favoritesIdList = [];
  _search = null; // поисковая строка
  _category = null; // выбранная категория
  _brand = null; // выбранные бренды
  _price = null; // выбранный диапазон цены
  _sort = null; // выбранная sort
  _page = 1; // текущая страница
  _count = 0; // сколько всего товаров
  _limit = 10; // товаров на страницу

  constructor() {
    makeAutoObservable(this);
  }

  get categories() {
    return this._categories;
  }

  get sort() {
    return this._sort;
  }

  get brands() {
    return this._brands;
  }

  get price() {
    return this._price;
  }

  get products() {
    return this._products;
  }

  get favorites() {
    return this._favorites;
  }

  get favoritIdList() {
    return this._favoritIdList;
  }

  get search() {
    return this._search;
  }

  get category() {
    return this._category;
  }

  get brand() {
    return this._brand;
  }

  get page() {
    return this._page;
  }

  get count() {
    return this._count;
  }

  get limit() {
    return this._limit;
  }

  get pages() {
    // всего страниц
    return Math.ceil(this.count / this.limit);
  }

  set categories(categories) {
    this._categories = categories;
  }

  set sort(sort) {
    this._sort = sort;
  }

  set brands(brands) {
    this._brands = brands;
  }

  set products(products) {
    this._products = products;
  }

  set favorites(favorites) {
    this._favorites = favorites;
  }
  
  set favoritIdList(favoritIdList) {
    this._favoritIdList = favoritIdList;
  }

  set search(search) {
    this.page = 1;
    this._search = search;
  }

  set category(category) {
    this.page = 1;
    this._category = category;
  }

  set brand(brand) {
    this.page = 1;
    this._brand = brand;
  }

  set price(price) {
    this.page = 1;
    this._price = price;
  }

  set page(page) {
    this._page = page;
  }

  set count(count) {
    this._count = count;
  }

  set limit(limit) {
    this._limit = limit;
  }
}

export default CatalogStore;
