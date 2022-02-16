export default class Storage {
  static setData = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  static getData = () => (localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos'))
    : []);
}
