import { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';

// const API = "https://strapi-rygs.onrender.com/api/prodis";
const Mahasiswa = () => {
    const{ id } = useParams()
    
    // const npm = data.find()
    // useEffect(()=>{
    //     getData()
    // })

    // const getData = ()  =>{
    //     fetch(API)
    //     .then(res => {
    //         if(res.ok){
    //             return res.json();
    //         }else{
    //             console.log('res error');
    //         }
    //     })
    //     .then((data) => console.log(data))
    //     .catch((err) => console.log(err))
    // }
    // // console.log(id);
    // // const [data, setData] = useState(null);

    // const fetchData = async () => {
    //      const res = await axios.get("https://strapi-rygs.onrender.com/api/prodis");
    //      console.log(res.data.data[0].attributes.prodi[0]);
    //      setData(res.data.data[0].attributes.prodi[0]);
    //    }
    
    //    useEffect(() => {
    //      fetchData()
    //    }, []);

    return (
        <>

                            <div key={id}>
                                <h1> NPM = {id}</h1>
                                <h1> Nama = {mahasiswa.nama}</h1>
                                <h1> Jenis Kelamin = {
                                mahasiswa.jenis_kelamin === "L" ? "Laki-laki" :
                                mahasiswa.jenis_kelamin === "P" ? "Perempuan" : "Tidak Diketahui"
                                }</h1>
                                <h1> Alamat = {mahasiswa.alamat}</h1>
                                <h1> Hobi = {mahasiswa.hobi.join(", ")}</h1>
                                
                            </div>
        </> 
    )
}

export default Mahasiswa


