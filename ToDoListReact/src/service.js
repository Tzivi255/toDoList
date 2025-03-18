import axios from 'axios';

// const apiUrl = "http://localhost:5224"
axios.defaults.baseURL = 'http://localhost:5224/items';

// הוסף interceptor לתפיסת שגיאות
axios.interceptors.response.use(
  response => {
    // החזר את התגובה אם אין שגיאה
    return response;
  },
  error => {
    // רישום השגיאה בלוג
    console.error('שגיאה ב-response:', error.response ? error.response.data : error.message);   
  }
);

export default {
  getTasks: async () => {
    const result = await axios.get(``)
    return result.data;
  },

  addTask: async (name) => {
    console.log('addTask', name)
    var item = {
      "name": name,
      "isComplete": false
    }
    await axios.post(``,item)
    return {};
  },

  setCompleted: async (id, isComplete) => {
    console.log('setCompleted', { id, isComplete })
    var item = {
      "isComplete": isComplete
    }
    await axios.put(`/${id}`, item)
    return {};
  },

  deleteTask: async (id) => {
    console.log('deleteTask')
    await axios.delete(`/${id}`)
  }
};
