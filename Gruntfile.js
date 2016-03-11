module.exports = function (grunt) { // obalovací funkce 
    grunt.initConfig({ 
        pkg: grunt.file.readJSON('package.json'), // cesta ke konfiguračnímu package.json 
        // kompilace LESS souboru 
        less: { // název úlohy a její nastavení 
            dev: { 
                files: { 
                    "parts/css/style.css": ["src/less/style.less" ] 
                } 
            } 
        } 
    }); 
  
    grunt.loadNpmTasks('grunt-contrib-less'); // chci načíst balíček grunt-contrib-less 
  
    grunt.registerTask('default', ['less']); // registrace defaultní úlohy 
    
 }; 
