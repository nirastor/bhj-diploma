/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * */
class Entity {
  
  static URL = '';
  
  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */

  static list( data, callback) {
    createRequest({
      method: 'GET',
      url: this.URL,
      data: data,
      responseType: 'JSON',
      callback: callback
    });
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create(data, callback) {
    createRequest({
      method: 'POST',
      url: this.URL,
      data: Object.assign({ _method: 'PUT' }, data ),
      responseType: 'JSON',
      callback: callback,
    });
  }

  /**
   * Получает информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static get( id = '', data, callback) {
    createRequest({
      method: 'GET',
      url: this.URL + '/' + id,
      data: data,
      responseType: 'JSON',
      callback: callback,
    });
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove( id = '', data, callback) {
    createRequest({
      method: 'POST',
      url: this.URL + '/' + id,
      data: Object.assign({ _method: 'DELETE' }, data ),
      responseType: 'JSON',
      callback: callback,
    });
  }
}

