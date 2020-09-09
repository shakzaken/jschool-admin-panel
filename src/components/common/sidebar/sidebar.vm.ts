import {ViewModel} from "mmlpx";
import {observable,action} from "mobx";

export enum MenuOptions {
  CreateCourse = "CreateCourse",
  CoursesList = "CoursesList",
  CreateUser = "CreateUser",
  UsersList= "UsersList",
  CreateDegree = "CreateDegree",
  DegreeList="DegreeList"
}

@ViewModel
export class SidebarVm {

  @observable
  activeMenu: MenuOptions = null;



  @action.bound
  setActiveMenu(activeMenu: MenuOptions){
    this.activeMenu = activeMenu;
  }


  @action.bound
  handleMenuClick(event:any,data:any){
    this.setActiveMenu(data.name);
  }


}
