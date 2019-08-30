import axios from 'axios';

//convert from function to variable
//context cannot be resolved, arrow/regular can be used, this. no longer needed
//promise cannot be resolved here, => return
//import axios
//explicitly export to prevent clashes

var urlPrefix = 'http://10.2.24.38:3001/api'
var serverURL = 'http://10.2.24.38:3001/'


var getProjects = () => {
  return axios.get(urlPrefix+'/projects')
    // .then(res => {
    //   this.setState({projects:res.data});
    // })
}

var getSingleProject = (id) => {
  return axios.get(urlPrefix+'/projects/'+id)
}

var getTypes = () => {
  return axios.get(urlPrefix+'/types')
}

var addProjects = (data) => {
  return axios.post(urlPrefix+'/projects',data)
}

var updateProjects = (id,data) => {
  return axios.put(urlPrefix+'/projects/'+id,data)
}

var deleteProjects = (id) => {
  return axios.delete(urlPrefix+'/projects/'+id)
}

var getSingleType = (id) => {
  return axios.get(urlPrefix+'/types/'+id)
}

var authenticate = (data) => {
  return axios.post(urlPrefix+'/authenticate',data)
}

var getSingleUser = (id) => {
  return axios.get(urlPrefix+'/users/'+id)
}

export {getProjects, getTypes, addProjects, getSingleProject, updateProjects, deleteProjects, getSingleType, authenticate, getSingleUser}