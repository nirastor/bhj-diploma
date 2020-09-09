/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const elSidebarButton = document.querySelector('.sidebar-toggle');
    elSidebarButton.addEventListener('click', () => {
      document.body.classList.toggle('sidebar-open');
    });
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const elLoginBtn = document.querySelector('.menu-item_login');
    elLoginBtn.addEventListener('click', () => {
      App.getModal('login').open();
    });
    
    const elRegisterBtn = document.querySelector('.menu-item_register');
    elRegisterBtn.addEventListener('click', () => {
      App.getModal('register').open();
    });
    
    const elRLogounBtn = document.querySelector('.menu-item_logout');
    elRLogounBtn.addEventListener('click', () => {
      User.logout({}, (err, data) => {
        if (data.success) {
          App.setState('init');
          User.unsetCurrent();
        } else {
          console.log(err);
        }
      });
      
    });
    
  }
}
