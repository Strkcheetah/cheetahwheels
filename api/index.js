import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health',(req,res)=>{
  res.json({ok:true,app:'HWBM'});
});

app.post('/api/login',(req,res)=>{
 const {usuario,password}=req.body;
 if(usuario==='admin' && password==='admin123'){
   return res.json({success:true});
 }
 res.status(401).json({success:false});
});

export default app;
