import { color } from '@material-ui/system'
import React from 'react'

function Footer() {
    return (
        <footer>
            <div style={{ width: "90%",padding:'1rem',textAlign:'center', margin: "0 auto", color:'var(--second-color)'}}>本網頁所載的所有資料、商標、標誌、圖像、短片、聲音檔案、連結及其他資料等（以下簡稱「資料」），只供資訊工業策進會(MFEE20)專題發表使用，如有侵權，請聯繫： y734340@gms.tku.edu.tw，我們會將資料全數下架，謝謝您。</div>
            <div style={{ width: "90%",padding:'1rem',textAlign:'center', color: "#ffecd2", borderTop: "2px solid #ffecd2" , margin: "0 auto" }}>&copy;P&B Inc, 2021</div>
        </footer>
    )
}

export default Footer
