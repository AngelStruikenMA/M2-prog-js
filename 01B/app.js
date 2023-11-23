class App
{
    runApplicaion()
    {
        console.log("hello world!")
        //code
        
        this.greeting = "starting up"
        this.Variabelwaarde = 999
        this.appNaam = "de speed slideshow"
        this.versie = "Beta nummer 1.0 a broer"
        this.versieDatum = "21-10-2023"
        this.autheur = "de enige echte angel"
        this.copyright = "als je mij na doet krijg je een boete jongeman"
        this.distributeur = "alleen ik man..."
        this.darkmode = true   
    }


}
let app = new App();
app.runApplicaion();

console.log( "Variabelwaarde :  " + app.Variabelwaarde)
console.log("appNaam: : " + app.appNaam)
console.log("versie : " + app.versie)
console.log("versieDatum : " + app.versieDatum)
console.log("autheur : " + app.autheur)
console.log("copyright : " + app.copyright)
console.log("distributeur : " + app.distributeur)
console.log("darkmode : " + app.darkmode)

