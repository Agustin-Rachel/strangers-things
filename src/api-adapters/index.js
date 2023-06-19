const COHORT_NAME = "2304-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export const fetchPosts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/posts`);
        const translatedData = await response.json(); 
        return translatedData.data.posts;
    } catch (error) {
        console.log(error);
    }
};

export const registerUser = async (username, password) => {
    try {
        const response = await fetch(`{BASE_URL}/users/register`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({
                user: {
                    username: username, 
                    password: password,
                },
            }),
        });
        const result = await response.json(); 

        return result.data; 
    }   catch (error) {
        console.log(error);
    }
};

export const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application-json",
            }, 
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password,
                },
            }),
        });
        const result = await response.json();
        console.log(result);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}; 

export const createNewPost = async (title, description, price, location, willDeliver) => {
    try {
        const response = await fetch(`${BASE_URL}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
       body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          location: location,
          willDeliver: willDeliver,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const updatePost = async (postId, newInfo) => {
    try {
        const response = await fetch (`${BASE_URL}/posts/${postId}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        post: {
          title: newInfo.title,
          description: newInfo.description,
          price: newInfo.price,
          location: newInfo.location,
          willDeliver: newInfo.willDeliver,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
}; 

export const deletePost = async (postId) => {
    try { 
        const response = await fetch(`${BASE_URL}/posts/${postId}`, {
            method: "DELETE", 
            headers: {
                "Content-type": "application/json", 
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        const result = await response.json(); 
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const postMessage = async (userId, message) => {
    try {
        const response = await fetch(`${BASE_URL}/posts/${userId}/messages`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json", 
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }, 
            body: JSON.stringify({
                message: {
                    content: message,
                },
            }),
        });
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const myData = async () => {
    try {
        const response = await fetch (`${BASE_URL}/users/me`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
};