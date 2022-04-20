// // import axios from "axios";

// // import useBibleReference from './useBibleReference';

// // import { useEffect,useState } from "react";
// // //import { useHistory } from "react-router-dom";


// // const SourceText = () => {
// //   //  const history = useHistory();
// //     const [data, setData] = useState();
   
// // const {bookId}=useBibleReference();
// //     useEffect(() => {
// //         //const token = localStorage.getItem("token");
// //         const token = 'XnokecizeFfCkWGTz6GeMcfyxU2peDko';
// //         // https://api.vachanengine.org/v2/autographa/project/sentences?project_id=100008&sentence_id_list=57001001&&sentence_id_list=57001002
// //         axios
// //           .get("https://api.vachanengine.org/v2/autographa/project/tokens", {
// //             headers: {
// //               "content-type": "application/json",
               
// //               app: "Autographa",
// //               Authorization: `Bearer ${token}`,

// //             },params: {
// //                 project_id:100008,
// //                 sentence_id_list:57001001,
// //                 //sentence_id_list:57001002,
// //               }
// //           })
// //           .then((res) => {
// //             //console.log(res.data); 
// //             //console.log(res.data[0].token);
// //             //    const sourceToken = res.map(data1=>({
// //             //        text:data1.token
// //             //        })
// //             //   );
// //             let sourceToken = res.data;
            
// //         // let dictionary = Object.assign({}, ...sourceToken.map((x) => ({
// //         //     [x.token]: x.token 
        
// //         // })));
// //         const a = [];
// //             sourceToken.forEach(element => {
// //                 // console.log({'text':element.token});//
// //                 a.push({'text':element.token});

// //             });
// //             console.log(a);

            

// //             //console.log(dictionary);
// //                setData(sourceToken);
// //             //   console.log(data);
// //        //    setData(res.data[0].sentence);
// //             //console.log(data);
// //             if (data.length === 0) {
// //               alert("Permission Denied");
// //               //history.push("/");
// //             }
// //           })
// //           .catch((error) => {
// //             alert("Error Caused, Please try again");
// //             //history.push("/");
// //           })
// //           .then(function () {
// //            // console.log(data);
            
// //           });
// //       }, [ ]);
// //     return (  
// //         <div>
// //         {/* Verse:->  {data} */}
        
// //         </div>
// //     );
// // }
 
// // export default SourceText;
// import useBibleReference from './useBibleReference';

// const SourceText = () => {
//     const {state, actions} = useBibleReference({});
      
//     return (  
//         console.log()
//     );
// }
 
// export default SourceText;