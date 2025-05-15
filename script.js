function basla(){

    let ay=prompt(`Hangi ayda doğdunuz`);
    let gün=prompt(`Hangi günde doğdunuz`);
    
    if((ay==="ocak" && 20<=gün && gün<=31)||(ay === "şubat" && gün >= 1  && gün <= 18)){

        alert("Sen Kova burcusun.");
    }
    else if((ay==="şubat" && 19<=gün && gün<=29)||(ay === "mart" && gün >= 1  && gün <= 20))
        {
        alert("Sen Balık burcusun.");
    }
    else if((ay==="mart" && 21<=gün && gün<=31)||(ay === "nisan" && gün >= 1  && gün <= 19))
        {
        alert("Sen Koç burcusun.");
    }
    else if((ay==="nisan" && 20<=gün && gün<=31)||(ay === "mayıs" && gün >= 1  && gün <= 20))
        {
        alert("Sen Boğa burcusun.");
    }
    else if((ay==="mayıs" && 21<=gün && gün<=31)||(ay === "haziran" && gün >= 1  && gün <= 20))
        {
        alert("Sen İkizler burcusun.");
    }
    else if((ay==="haziran" && 21<=gün && gün<=31)||(ay === "temmuz" && gün >= 1  && gün <= 22))
        {
        alert("Sen Yengeç burcusun.");
    }
    else if((ay==="temmuz" && 23<=gün && gün<=31)||(ay === "ağustos" && gün >= 1  && gün <= 22))
        {
        alert("Sen Aslan burcusun.");
    }
    else if((ay==="ağustos" && 23<=gün && gün<=31)||(ay === "eylül" && gün >= 1  && gün <= 22))
        {
        alert("Sen Başak burcusun.");
    }
    else if((ay==="eylül" && 23<=gün && gün<=31)||(ay === "ekim" && gün >= 1  && gün <= 22))
        {
        alert("Sen Terazi burcusun.");
    }
    else if((ay==="ekim" && 23<=gün && gün<=31)||(ay === "kasım" && gün >= 1  && gün <= 21))
        {
        alert("Sen Akrep burcusun.");
    }
    else if((ay==="kasım" && 22<=gün && gün<=31)||(ay === "aralık" && gün >= 1  && gün <= 21))
        {
        alert("Sen Yay burcusun.");
    }
    else if((ay==="aralık" && 22<=gün && gün<=31)||(ay === "ocak" && gün >= 1  && gün <= 19))
        {
        alert("Sen Oğlak burcusun.");
    }
    



}