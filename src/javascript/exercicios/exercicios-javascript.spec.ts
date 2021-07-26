import { determinateLearningMorePriority, elevarAoQuadrado, LevelCodeEntity, somaNumeros, somentePares } from "./exercicios-javascript";

describe("Exercicios Javascript", () => {

    describe("Somente pares", () => {
        it("Deve retornar somente os números pares dado um determinado vetor", () => {
            const input = [1, 2, 3, 4];
            const result = [2, 4];
            expect(somentePares(input)).toEqual(result);
        })
    });

    describe("Soma total", () => {
        it("Deve retornar a soma de todos os items do array", () => {
            const input = [1, 2, 3, 4];
            const result = 10;
            expect(somaNumeros(input)).toEqual(result);
        })
    });

    describe("Elevar ao quadrado", () => {
        it("Deve retornar o quadrado de cada item do array", () => {
            const input = [1, 2, 3, 4];
            const result = [1, 4, 9, 16];
            expect(elevarAoQuadrado(input)).toEqual(result);
        })
    });
    describe("qual é o learning more ? respeitando a prioridade", () => {
        // Prioridade >> "spboost" | "podcast" | "eyoung" | "paginab2c" | null
        it("Deve retornar o item correto do learning more, baseado na prioridade estabelecida", () => {
            const levelCodes: LevelCodeEntity[] = [
                {
                    learningMore: "paginab2c"
                },
                {
                    learningMore: "paginab2c"
                },
                {
                    learningMore: "podcast"
                },
                {
                    learningMore: "spboost"
                }
            ]
            expect(determinateLearningMorePriority(levelCodes)).toEqual("spboost")
        })
        it("Deve retornar o item correto do learning more, baseado na prioridade estabelecida", () => {
            const levelCodes: LevelCodeEntity[] = [
                {
                    learningMore: "paginab2c"
                },
                {
                    learningMore: "podcast"
                },
                {
                    learningMore: "paginab2c"
                }
            ]
            expect(determinateLearningMorePriority(levelCodes)).toEqual("podcast")
        })

        it("Deve retornar o item correto do learning more, baseado na prioridade estabelecida", () => {
            const levelCodes: LevelCodeEntity[] = [
                {
                    learningMore: null
                },
                {
                    learningMore: null
                },
                {
                    learningMore: null
                }
            ]
            expect(determinateLearningMorePriority(levelCodes)).toEqual(null)
        })
    })
})
