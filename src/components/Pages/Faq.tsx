import { FaqItem, FaqPage } from "../Content/FaqPage"

export const Faq = () => {
  const array = [
    {
      title:
        "Bastano poche regole, ottimi ingredienti, il mio impasto pizza a base di pochissimo lievito di birra",
      description:
        "Ma la vera chicca, che rende la vostra pizza fatta in casa uguale a quella delle pizzerie anche nell’aspetto è la doppia cottura: pochi minuti su piastra e poi nel forno ad altissima temperatura, che permette alla pizza di abbrustolirsi anche in superficie! soluzione che sostituisce il classico forno a legna delle pizzerie! Trucco svelato dal pizzaiolo napoletano Angelo Buono, che ringrazio pubblicamente! Di seguito trovate una guida completa, corredata da esempi illustrati, trucchi e consigli per fare la pizza a casa buona come non l’avete mai mangiata!! che può fare tranquillamente concorrenza a quella delle pizzerie! Scommettiamo?",
    },
    {
      title:
        "Sottile, ma allo stesso tempo morbida, leggermente croccante sul fondo,  con il classico “cornicione” bruciacchiato, saporita, profumata ma anche leggera e digeribile",
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
    {
      title:
        "Bastano poche regole, ottimi ingredienti, il mio impasto pizza a base di pochissimo lievito di birra",
      description:
        "Ma la vera chicca, che rende la vostra pizza fatta in casa uguale a quella delle pizzerie anche nell’aspetto è la doppia cottura: pochi minuti su piastra e poi nel forno ad altissima temperatura, che permette alla pizza di abbrustolirsi anche in superficie! soluzione che sostituisce il classico forno a legna delle pizzerie! Trucco svelato dal pizzaiolo napoletano Angelo Buono, che ringrazio pubblicamente! Di seguito trovate una guida completa, corredata da esempi illustrati, trucchi e consigli per fare la pizza a casa buona come non l’avete mai mangiata!! che può fare tranquillamente concorrenza a quella delle pizzerie! Scommettiamo?",
    },
  ]

  const mapFaqIssues = array.map((el: any, index: number) => (
    <FaqItem number={index + 1} title={el.title} description={el.description} />
  ))

  return (
    <>
      <div>FAQ page</div>
      <div>{mapFaqIssues}</div>
      <FaqPage />
    </>
  )
}

{
  /* <FaqPage number={1} 
title="How to explain xxxx: How to explain xxxx: How to explain xxxx: How to exp lain xxxx: H ow to exp lain xxx x: How to expla in xxxx: How to explain xxxx:" 
description="ooooooo, hot dog mn iam mniam mniam oooo ooo, 
hotdog mniam mniam mni am oooo ooo, ho tdog mni am mniam mniam oooo ooo, 
hotd dog mniam mni am mniam ooooooo, hotdog mni am mniam mn iam ooo oooo, 
hotdog mnia m mni am mniam ooooooo, hotd og m niam mn iam mniam
hot dog mni am mniam mni m ooooooo, hotdog mn iam mniam mniam" 
text="omom om o mom omo"/>


<FaqPage number={1} 
title="How to explain xxxx: How to explain xxxx: How to explain xxxx: How to exp lain xxxx: H ow to exp lain xxx x: How to expla in xxxx: How to explain xxxx:" 
description="ooooooo, hot dog mn iam mniam mniam oooo ooo, 
hotdog mniam mniam mni am oooo ooo, ho tdog mni am mniam mniam oooo ooo, 
hotd dog mniam mni am mniam ooooooo, hotdog mni am mniam mn iam ooo oooo, 
hotdog mnia m mni am mniam ooooooo, hotd og m niam mn iam mniam
hot dog mni am mniam mni m ooooooo, hotdog mn iam mniam mniam" 
text="omom om o mom omo"/> */
}
