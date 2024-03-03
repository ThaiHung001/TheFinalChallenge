import {
  getDocs,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import { db } from './firebase.js';

async function createPost(content) {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      content: content,
      user: "tèo"
    });
    console.log("Document written with ID: ", docRef.id);
    displayPosts(); // Refresh the posts after a new one is created
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getPosts() {
  const querySnapshot = await getDocs(collection(db, "posts"));
  let posts = [];
  querySnapshot.forEach((doc) => {
    posts.push(doc.data());
  });
  return posts;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

async function displayPosts() {
  let posts = await getPosts();
  shuffleArray(posts);
  const postsContainer = document.getElementById('posts');
  // Clear the current posts
  postsContainer.innerHTML = '';
  posts.forEach(post => {
    let postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.innerHTML = `
      <h4>${post.user}</h4>
      <p>${post.content}</p>
    `;
    // Add the new post to the top of the posts container
    postsContainer.prepend(postElement);
  });
}

document.getElementById('post_confirm').addEventListener('click', function () {
  var content = document.getElementById('post_input').value;
  createPost(content);
});
