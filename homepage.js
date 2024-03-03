import {
    addDoc,
    collection,
    deleteDoc,
    deleteField,
    doc,
    getDocs,
    updateDoc,
  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
  
  import { db } from './scripts/firebase.js';
  
  console.log("đang chạy file script.js");
  
  // Chạy thử C,R,U,D để xem firestore hoạt động như nào nhé?
  // try {
  //   const docRef = await addDoc(collection(db, "posts"), {
  //     user: "Nguyen",
  //     data: post
  //   });
  //   console.log("in ra id rồi nhé");
  //   console.log("Document written with ID: ", docRef.id); /// hiển thị id của doc đó
  // } catch (e) {
  //   console.error("Error adding document: ", e); // hiển thị lỗi nếu có.
  // }
  
  
  ////// Read Database.
  const querySnapshot = await getDocs(collection(db, "posts"));

  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
  
  /// lấy ra tất cả data trong collection.

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });


  // let post_box = document.getElementById('post_box')
  // post_box.addEventListener('submit', function(event) {


  // })
    // let post = document.getElementById('post_input').value;


  ///// Update database
  const user1 = doc(db, "posts", "posts1");
  await updateDoc(posts1, {
    user: 1000,
    data: post
  });
  
  
  
  ///// Delete database
  
  // // delele doc
  // await deleteDoc(doc(db, "posts", "posts1"));
  
  
  // //// Delete field
  // const userRef = doc(db, 'posts', 'aKyCh8NepAu068Ips0hy');
  
  // // Remove the 'born' field from the document
  // await updateDoc(userRef, {
  //   born: deleteField()
  // });