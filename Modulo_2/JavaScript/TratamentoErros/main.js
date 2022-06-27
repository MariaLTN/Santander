function arrayNumeroCorrespondentes(array, number) {
    
    try {
        if (!array || !number) throw new ReferenceError("Erro de Referência, envie os paramêtros.");

        if (typeof array !== 'object') throw new TypeError("O array precisa ser do tipo Object.");
        
        if (typeof number !== 'number') throw new TypeError("O número precisa ser do tipo Number.");

        if (array.length !== number) throw new RangeError("O número não corresponde ao tamanho do array.");

        return true;
    }

    catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Reference Error; ", e.message);
        } else if (e instanceof TypeError) {
            console.log("Type Error; ", e.message) ;
        } else if (e instanceof RangeError) {
            console.log("Range Error; ",e.message);
        } else {
            console.log("Aconteceu um erro inesperado");
        }
    }
}

arrayNumeroCorrespondentes([1], 1);

