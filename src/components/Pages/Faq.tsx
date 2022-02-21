import { useState } from "react"
import styled from "styled-components"
import { colors } from "../../utils/appColors"
import { FaqItem } from "../PagesComponents/FaqComponents/FaqItem"
import { FaqQuestion } from "../PagesComponents/FaqComponents/FaqQuestion"

export const Faq = () => {
  const array = [
    {
      title: "Bastano poche regole",
      description: "Ma la vera chicca",
    },
    {
      title:
        "Sottile, ma allo stesso tempo morbida, leggermente croccante sul fondo,  con il classico “cornicione” bruciacchiato, saporita, profumata ma anche leggera e digeribile",
      description:
        "Ma la vera chicca, che rende la vostra pizza fatta in casa uguale a quella delle pizzerie anche nell’aspetto è la doppia cottura: pochi minuti su piastra e poi nel forno ad altissima temperatura, che permette alla pizza di abbrustolirsi anche in superficie! soluzione che sostituisce il classico forno a legna delle pizzerie! Trucco svelato dal pizzaiolo napoletano Angelo Buono, che ringrazio pubblicamente! Di seguito trovate una guida completa, corredata da esempi illustrati, trucchi e consigli per fare la pizza a casa buona come non l’avete mai mangiata!! che può fare tranquillamente concorrenza a quella delle pizzerie! Scommettiamo? Ma la vera chicca, che rende la vostra pizza fatta in casa uguale a quella delle pizzerie anche nell’aspetto è la doppia cottura: pochi minuti su piastra e poi nel forno ad altissima temperatu Ma la vera chicca, che rende la vostra pizza fatta in casa uguale a quella delle pizzerie anche nell’aspetto è la doppia cottura: pochi minuti su piastra e poi nel forno ad altissima temperatura, che permette alla pizza di abbrustolirsi anche in superficie! soluzione che sostituisce il classico forno a legna delle pizzerie! Trucco svelato dal pizzaiolo napoletano Angelo Buono, che ringrazio pubblicamente! Di seguito trovate una guida completa, corredata da esempi illustrati, trucchi e consigli per fare la pizza a casa buona come non l’avete mai mangiata!! che può fare tranquillamente concorrenza a quella delle pizzerie! Scommettiamo? Ma la vera chicca, che rende la vostra pizza fatta in casa uguale a quella delle pizzerie anche nell’aspetto è la doppia cottura: pochi minuti su piastra e poi nel forno ad altissima temperatu",
    },
    {
      title:
        "Bastano poche regole, ottimi ingredienti, il mio impasto pizza a base di pochissimo lievito di birra",
      description:
        "Ma la vera chicca, che rende la vostra pizza fatta in casa uguale a quella delle pizzerie anche nell’aspetto è la doppia cottura: pochi minuti su piastra e poi nel forno ad altissima temperatura, che permette alla pizza di abbrustolirsi anche in superficie! soluzione che sostituisce il classico forno a legna delle pizzerie! Trucco svelato dal pizzaiolo napoletano Angelo Buono, che ringrazio pubblicamente! Di seguito trovate una guida completa, corredata da esempi illustrati, trucchi e consigli per fare la pizza a casa buona come non l’avete mai mangiata!! che può fare tranquillamente concorrenza a quella delle pizzerie! Scommettiamo?",
    },
    {
      title:
        "Bastano poche regole, ottimi ingredienti, il mio impasto pizza a base di pochissimo lievito di birra",
      description:
        "Ma la vera chicca, che rende la vostra pizza fatta in casa uguale a quella delle pizzerie anche nell’aspetto è la doppia cottura: pochi minuti su piastra e poi nel forno ad altissima temperatura, che permette alla pizza di abbrustolirsi anche in superficie! soluzione che sostituisce il classico forno a legna delle pizzerie! Trucco svelato dal pizzaiolo napoletano Angelo Buono, che ringrazio pubblicamente! Di seguito trovate una guida completa, corredata da esempi illustrati, trucchi e consigli per fare la pizza a casa buona come non l’avete mai mangiata!! che può fare tranquillamente concorrenza a quella delle pizzerie! Scommettiamo?",
    },
    {
      title:
        "Bastano poche regole, ottimi ingredienti, il mio impasto pizza a base di pochissimo lievito di birra",
      description:
        "Ma la vera chicca, che rende la vostra pizza fatta in casa uguale a quella delle pizzerie anche nell’aspetto è la doppia cottura: pochi minuti su piastra e poi nel forno ad altissima temperatura, che permette alla pizza di abbrustolirsi anche in superficie! soluzione che sostituisce il classico forno a legna delle pizzerie! Trucco svelato dal pizzaiolo napoletano Angelo Buono, che ringrazio pubblicamente! Di seguito trovate una guida completa, corredata da esempi illustrati, trucchi e consigli per fare la pizza a casa buona come non l’avete mai mangiata!! che può fare tranquillamente concorrenza a quella delle pizzerie! Scommettiamo?",
    },
    {
      title:
        "Bastano poche regole, ottimi ingredienti, il mio impasto pizza a base di pochissimo lievito di birra",
      description:
        "Ma la vera chicca, che rende la vostra pizza fatta in casa uguale a quella delle pizzerie anche nell’aspetto è la doppia cottura: pochi minuti su piastra e poi nel forno ad altissima temperatura, che permette alla pizza di abbrustolirsi anche in superficie! soluzione che sostituisce il classico forno a legna delle pizzerie! Trucco svelato dal pizzaiolo napoletano Angelo Buono, che ringrazio pubblicamente! Di seguito trovate una guida completa, corredata da esempi illustrati, trucchi e consigli per fare la pizza a casa buona come non l’avete mai mangiata!! che può fare tranquillamente concorrenza a quella delle pizzerie! Scommettiamo?",
    },
    {
      title:
        "Bastano poche regole, ottimi ingredienti, il mio impasto pizza a base di pochissimo lievito di birra",
      description:
        "Ma la vera chicca, che rende la vostra pizza fatta in casa uguale a quella delle pizzerie anche nell’aspetto è la doppia cottura: pochi minuti su piastra e poi nel forno ad altissima temperatura, che permette alla pizza di abbrustolirsi anche in superficie! soluzione che sostituisce il classico forno a legna delle pizzerie! Trucco svelato dal pizzaiolo napoletano Angelo Buono, che ringrazio pubblicamente! Di seguito trovate una guida completa, corredata da esempi illustrati, trucchi e consigli per fare la pizza a casa buona come non l’avete mai mangiata!! che può fare tranquillamente concorrenza a quella delle pizzerie! Scommettiamo?",
    },
    {
      title:
        "Bastano poche regole, ottimi ingredienti, il mio impasto pizza a base di pochissimo lievito di birra",
      description:
        "Ma la vera chicca, che rende la vostra pizza fatta in casa uguale a quella delle pizzerie anche nell’aspetto è la doppia cottura: pochi minuti su piastra e poi nel forno ad altissima temperatura, che permette alla pizza di abbrustolirsi anche in superficie! soluzione che sostituisce il classico forno a legna delle pizzerie! Trucco svelato dal pizzaiolo napoletano Angelo Buono, che ringrazio pubblicamente! Di seguito trovate una guida completa, corredata da esempi illustrati, trucchi e consigli per fare la pizza a casa buona come non l’avete mai mangiata!! che può fare tranquillamente concorrenza a quella delle pizzerie! Scommettiamo?",
    },
    {
      title:
        "Bastano poche regole, ottimi ingredienti, il mio impasto pizza a base di pochissimo lievito di birra",
      description:
        "Ma la vera chicca, che rende la vostra pizza fatta in casa uguale a quella delle pizzerie anche nell’aspetto è la doppia cottura: pochi minuti su piastra e poi nel forno ad altissima temperatura, che permette alla pizza di abbrustolirsi anche in superficie! soluzione che sostituisce il classico forno a legna delle pizzerie! Trucco svelato dal pizzaiolo napoletano Angelo Buono, che ringrazio pubblicamente! Di seguito trovate una guida completa, corredata da esempi illustrati, trucchi e consigli per fare la pizza a casa buona come non l’avete mai mangiata!! che può fare tranquillamente concorrenza a quella delle pizzerie! Scommettiamo?",
    },
    {
      title:
        "Bastano poche regole, ottimi ingredienti, il mio impasto pizza a base di pochissimo lievito di birra",
      description:
        "Ma la vera chicca, che rende la vostra pizza fatta in casa uguale a quella delle pizzerie anche nell’aspetto è la doppia cottura: pochi minuti su piastra e poi nel forno ad altissima temperatura, che permette alla pizza di abbrustolirsi anche in superficie! soluzione che sostituisce il classico forno a legna delle pizzerie! Trucco svelato dal pizzaiolo napoletano Angelo Buono, che ringrazio pubblicamente! Di seguito trovate una guida completa, corredata da esempi illustrati, trucchi e consigli per fare la pizza a casa buona come non l’avete mai mangiata!! che può fare tranquillamente concorrenza a quella delle pizzerie! Scommettiamo?",
    },
    {
      title:
        "Bastano poche regole, ottimi ingredienti, il mio impasto pizza a base di pochissimo lievito di birra",
      description:
        "Ma la vera chicca, che rende la vostra pizza fatta in casa uguale a quella delle pizzerie anche nell’aspetto è la doppia cottura: pochi minuti su piastra e poi nel forno ad altissima temperatura, che permette alla pizza di abbrustolirsi anche in superficie! soluzione che sostituisce il classico forno a legna delle pizzerie! Trucco svelato dal pizzaiolo napoletano Angelo Buono, che ringrazio pubblicamente! Di seguito trovate una guida completa, corredata da esempi illustrati, trucchi e consigli per fare la pizza a casa buona come non l’avete mai mangiata!! che può fare tranquillamente concorrenza a quella delle pizzerie! Scommettiamo?",
    },
    {
      title:
        "Bastano poche regole, ottimi ingredienti, il mio impasto pizza a base di pochissimo lievito di birra",
      description:
        "Ma la vera chicca, che rende la vostra pizza fatta in casa uguale a quella delle pizzerie anche nell’aspetto è la doppia cottura: pochi minuti su piastra e poi nel forno ad altissima temperatura, che permette alla pizza di abbrustolirsi anche in superficie! soluzione che sostituisce il classico forno a legna delle pizzerie! Trucco svelato dal pizzaiolo napoletano Angelo Buono, che ringrazio pubblicamente! Di seguito trovate una guida completa, corredata da esempi illustrati, trucchi e consigli per fare la pizza a casa buona come non l’avete mai mangiata!! che può fare tranquillamente concorrenza a quella delle pizzerie! Scommettiamo?",
    },
  ]

  const FaqContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 1230px;
  `

  const mapFaqIssues = array.map((el, index) => (
    <FaqItem
      number={index + 1}
      title={el.title}
      description={el.description}
      backgroundColor={
        index % 2 ? colors.sunnyYellow : colors.sunnyYellowOpacity
      }
    />
  ))

  return (
    <FaqContainer>
      <div>{mapFaqIssues}</div>
      <FaqQuestion />
    </FaqContainer>
  )
}
