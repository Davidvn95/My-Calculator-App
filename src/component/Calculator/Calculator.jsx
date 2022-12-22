import React, { useState } from "react";
import styles from "./Calculator.module.css";

export const Calculator = () => {
    const [result, setResult] = useState({
        input: 0,
        resultado: "",
        initialValue: 0,
        option: "",
        operations: {
            "+": (a, b = 0) => a / 1 + b / 1,
            "*": (a, b = 1) => (a / 1) * (b / 1),
            "-": (a, b = 0) => a / 1 - b / 1,
            "/": (a, b = 1) => a / 1 / (b / 1),
            "n^": (a, b = 1) => (a / 1) ** (b / 1),
        },
    });

    // Maneja el cambio del input con el teclado del computador;
    const handleChangeInput = (event) => {
        const value = event.target.value;
        setResult({
            ...result,
            input: value,
        });
    };

    // Manejael cambi del input con el teclado en pantalla;
    const handleChangeInputTeclado = (event) => {
        setResult({
            ...result,
            input: result.input + event.target.innerText,
        });
    };

    // Borra un caracter del input para corregirlo;
    const deleteInput = (event) => {
        if (event.target.innerText.toString() === "XX") {
            const menosTexto = result.input.toString().split("");
            if (menosTexto.length > 1) {
                menosTexto.pop();
                setResult({
                    ...result,
                    input: parseInt(menosTexto.join("")),
                });
            } else if (parseInt(menosTexto[0]) !== 0) {
                setResult({
                    ...result,
                    input: 0,
                    resultado: "",
                });
            }
        } else
            setResult({
                ...result,
                input: 0,
                resultado: "",
                initialValue: 0,
            });
    };

    // Limpia el input y los resultados, setea todo;
    const typeOfOperations = (event) => {
        const option = event.target.innerText;
        if (result.input !== 0) {
            if (result.initialValue === 0) {
                setResult({
                    ...result,
                    option: option,
                    resultado: result.input,
                    initialValue: result.input,
                    input: 0,
                });
            } else {
                const option1 = result.option;
                setResult({
                    ...result,
                    option: option,
                    resultado: result.operations[option1](result.initialValue, result.input),
                    initialValue: result.operations[option1](
                        result.initialValue,
                        result.input
                    ),
                    input: 0,
                });
            }
        } else
            setResult({
                ...result,
                option: option,
            });
    };

    // Se lleva a cabo la solución final;
    const finalResult = (event) => {
        if (event.target.innerText === "=") {
            const resultado = result.operations[result.option](
                result.initialValue,
                result.input
            );
            setResult({
                ...result,
                resultado: resultado,
                initialValue: resultado,
                input: 0,
            });
        } else {
            const resultado = result.operations[result.option](
                result.initialValue,
                result.input / 100
            );
            setResult({
                ...result,
                resultado: resultado,
                initialValue: resultado,
                input: 0,
            });
        }
    };

    return (
        <div className={styles.calculator}>
            <div className={styles.tablero}>
                <input
                    type="text"
                    onChange={handleChangeInput}
                    value={result.input}
                    name="input"
                />
                <span>{result.resultado}</span>
            </div>
            <div className={styles.containerTeclas}>
                <button className={styles.teclas} onClick={deleteInput}>
                    CLN
                </button>
                <button className={styles.teclas} onClick={typeOfOperations}>
                    n^
                </button>
                <button className={styles.teclas} onClick={finalResult}>
                    %
                </button>
                <button className={styles.teclas} onClick={typeOfOperations}>
                    /
                </button>
                <button className={styles.teclas} onClick={handleChangeInputTeclado}>
                    1
                </button>
                <button className={styles.teclas} onClick={handleChangeInputTeclado}>
                    2
                </button>
                <button className={styles.teclas} onClick={handleChangeInputTeclado}>
                    3
                </button>
                <button className={styles.teclas} onClick={typeOfOperations}>
                    *
                </button>
                <button className={styles.teclas} onClick={handleChangeInputTeclado}>
                    4
                </button>
                <button className={styles.teclas} onClick={handleChangeInputTeclado}>
                    5
                </button>
                <button className={styles.teclas} onClick={handleChangeInputTeclado}>
                    6
                </button>
                <button className={styles.teclas} onClick={typeOfOperations}>
                    -
                </button>
                <button className={styles.teclas} onClick={handleChangeInputTeclado}>
                    7
                </button>
                <button className={styles.teclas} onClick={handleChangeInputTeclado}>
                    8
                </button>
                <button className={styles.teclas} onClick={handleChangeInputTeclado}>
                    9
                </button>
                <button className={styles.teclas} onClick={typeOfOperations}>
                    +
                </button>
                <button className={styles.teclas} onClick={deleteInput}>
                    XX
                </button>
                <button className={styles.teclas} onClick={handleChangeInputTeclado}>
                    0
                </button>
                <button className={styles.teclas} onClick={handleChangeInputTeclado}>
                    .
                </button>
                <button className={styles.teclas} onClick={finalResult}>
                    =
                </button>
            </div>
        </div>
    );
};
