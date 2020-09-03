/**
 * Класс LoginForm управляет формой
 * входа в портал
 * Наследуется от AsyncForm
 * */
class LoginForm extends AsyncForm {
  constructor (element) {
    super (element);
  }
  

  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit( options ) {
    console.log('login-onsumbmit start');
    User.login(options, (err, data) => {
      console.log('err: ', err);
      console.log('data: ', typeof data, data);
      console.log(data.success);
      
      if (data.success) {
        console.log('URA');
        this.element.reset();
        App.setState('user-logged');
        App.getModal('login').close();
      }
    });
    console.log('login-onsumbmit end');
  }
}
