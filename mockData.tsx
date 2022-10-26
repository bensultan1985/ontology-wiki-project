// export const mockData = [
//   {
//     conceptId: 1,
//     displayName: "Particulars and universals",
//     description:
//       "Particulars or individuals are usually contrasted with universals. Universals concern features that can be exemplified by various different particulars.For example, a tomato and a strawberry are two particulars that exemplify the universal redness. Universals can be present at various distinct locations in space at the same time while particulars are restricted to one location at a time. Furthermore, universals can be fully present at different times, which is why they are sometimes referred to as repeatables in contrast to non-repeatable particulars.The so-called problem of universals is the problem to explain how different things can agree in their features, e.g. how a tomato and a strawberry can both be red. Realists about universals believe that there are universals. They can solve the problem of universals by explaining the commonality through a universal shared by both entities.Realists are divided among themselves as to whether universals can exist independently of being exemplified by something or not.Nominalists, on the other hand, deny that there are universals. They have to resort to other notions to explain how a feature can be common to several entities, for example, by positing either fundamental resemblance-relations between the entities (resemblance nominalism) or a shared membership to a common natural class (class nominalism).",
//     parentIds: [6],
//     childIds: [3, 4, 5],
//     alternateNames: ["particulars", "concrete", "nominalism"],
//   },
//   {
//     conceptId: 2,
//     displayName: "Abstract and concrete",
//     description:
//       "Many philosophers agree that there is an exclusive and exhaustive distinction between concrete objects and abstract objects. Some philosophers consider this to be the most general division of being. Examples of concrete objects include plants, human beings and planets while things like numbers, sets and propositions are abstract objects.But despite the general agreement concerning the paradigm cases, there is less consensus as to what the characteristic marks of concreteness and abstractness are. Popular suggestions include defining the distinction in terms of the difference between (1) existence inside or outside space-time, (2) having causes and effects or not and (3) having contingent or necessary existence.",
//     parentIds: [6],
//     childIds: [3],
//     alternateNames: ["abstract", "concrete", "division of being"],
//   },
//   {
//     conceptId: 3,
//     displayName: "Particulars",
//     description:
//       "In metaphysics, particulars or individuals are usually contrasted with universals.Universals concern features that can be exemplified by various different particulars. Particulars are often seen as concrete, spatiotemporal entities as opposed to abstract entities, such as properties or numbers. There are, however, theories of abstract particulars or tropes. For example, Socrates is a particular (there's only one Socrates-the-teacher-of-Plato and one cannot make copies of him, e.g., by cloning him, without introducing new, distinct particulars). Redness, by contrast, is not a particular, because it is abstract and multiply instantiated (for example a bicycle, an apple, and a given woman's hair can all be red). In nominalist view everything is particular. Universals in each moment of time from point of view of an observer is the collection of particulars that participates it (even a void collection).",
//     parentIds: [2, 1],
//     childIds: [4],
//     alternateNames: null,
//   },
//   {
//     conceptId: 4,
//     displayName: "Moral Particularism",
//     description:
//       "Moral particularism is a theory in meta-ethics that runs counter to the idea that moral actions can be determined by applying universal moral principles. It states that there is no set of moral principles that can be applied to every situation, making it an idea appealing to the causal nature of morally-challenging situations. Moral judgements are said to be determined by factors of relevance with the consideration of a particular context.A moral particularist, for example, would argue that homicide cannot be judged to be morally wrong until all the morally relevant facts are known. While this stands in stark contrast to other prominent moral theories, such as deontology, consequentialism and virtue ethics, it finds its way into jurisprudence, with the idea of justifiable homicide for instance. In this case, the morally relevant facts are based on context rather than principle. Critics would argue that even in this case, the principle still informs morally right action.",
//     parentIds: [3, 1],
//     childIds: null,
//     alternateNames: ["morality"],
//   },
//   {
//     conceptId: 5,
//     displayName: "Ontological dependence",
//     description:
//       "An entity ontologically depends on another entity if the first entity cannot exist without the second entity. Ontologically independent entities, on the other hand, can exist all by themselves. For example, the surface of an apple cannot exist without the apple and so depends on it ontologically. Entities often characterized as ontologically dependent include properties, which depend on their bearers, and boundaries, which depend on the entity they demarcate from its surroundings.As these examples suggest, ontological dependence is to be distinguished from causal dependence, in which an effect depends for its existence on a cause. It is often important to draw a distinction between two types of ontological dependence: rigid and generic.Rigid dependence concerns the dependence on one specific entity, as the surface of an apple depends on its specific apple. Generic dependence, on the other hand, involves a weaker form of dependence, on merely a certain type of entity. For example, electricity generically depends on there being charged particles, but it does not depend on any specific charged particle.Dependence-relations are relevant to ontology since it is often held that ontologically dependent entities have a less robust form of being. This way a hierarchy is introduced into the world that brings with it the distinction between more and less fundamental entities.",
//     parentIds: [1],
//     childIds: null,
//     alternateNames: null,
//   },
//   {
//     conceptId: 6,
//     displayName: "Ontology Wiki",
//     description:
//       "Ontology is closely associated with Aristotle's question of 'being qua being': the question of what all entities in the widest sense have in common.The Eleatic principle is one answer to this question: it states that being is inextricably tied to causation, that 'Power is the mark of Being'. One problem with this answer is that it excludes abstract objects. Another explicit but little accepted answer can be found in Berkeley's slogan that 'to be is to be perceived'. Intimately related but not identical to the question of 'being qua being' is the problem of categories.Categories are usually seen as the highest kinds or genera.A system of categories provides a classification of entities that is exclusive and exhaustive: every entity belongs to exactly one category. Various such classifications have been proposed, they often include categories for substances, properties, relations, states of affairs or events.At the core of the differentiation between categories are various fundamental ontological concepts and distinctions, for example, the concepts of particularity and universality, of abstractness and concreteness, of ontological dependence, of identity and of modality. These concepts are sometimes treated as categories themselves, are used to explain the difference between categories or play other central roles for characterizing different ontological theories. Within ontology, there is a lack of general consensus concerning how the different categories are to be defined. Different ontologists often disagree on whether a certain category has any members at all or whether a given category is fundamental.",
//     parentIds: null,
//     childIds: [1, 2],
//     alternateNames: null,
//   },
// ];

export const mockData = [
  {
    conceptId: 1,
    displayName: "Clinical Ontology Wiki",
    description:
      "Habits and environmental factors that lead to disease and and other medical issues.",
    parentIds: null,
    childIds: [2, 3],
    alternateNames: ["environment", "leads"],
  },
  {
    conceptId: 2,
    displayName: "Diagnosis",
    description:
      "Methods for discovering medical conditions experienced by patients.",
    parentIds: [1],
    childIds: [4, 9],
    alternateNames: ["symptoms", "appointment", "solve"],
  },
  {
    conceptId: 3,
    displayName: "Treatment",
    description:
      "Medications, therapy, and habits for recovery from illnesses and conditions.",
    parentIds: [1],
    childIds: [20, 27],
    alternateNames: null,
  },
  {
    conceptId: 4,
    displayName: "Diagnosing Disease of the Eye",
    description:
      "Click a link in the 'learn more' section below for information on diagnostic procedures for disesases of the eye.",
    parentIds: [2],
    childIds: [5, 6, 7],
    alternateNames: null,
  },
  {
    conceptId: 5,
    displayName: "Diagnosing Glaucoma",
    description:
      "Your health care provider will review your medical history and conduct a comprehensive eye examination. Your provider may perform several tests.",
    parentIds: [4],
    childIds: [8],
    alternateNames: null,
  },
  {
    conceptId: 6,
    displayName: "Diagnosing Cataracts",
    description:
      "To determine whether you have a cataract, your doctor will review your medical history and symptoms, and perform an eye examination. Your doctor may conduct several tests.",
    parentIds: [4],
    childIds: [8, 19],
    alternateNames: null,
  },
  {
    conceptId: 7,
    displayName: "Diagnosing Dry Eye Syndrome",
    description:
      "A comprehensive eye exam. An eye exam that includes a complete history of your overall health and your eye health can help your eye care specialist diagnose the cause of your dry eyes.",
    parentIds: [4],
    childIds: [19],
    alternateNames: null,
  },
  {
    conceptId: 8,
    displayName: "Visual Acuity Test",
    description:
      "A visual acuity test uses an eye chart to measure how well you can read a series of letters. Your eyes are tested one at a time, while the other eye is covered. Using a chart or a viewing device with progressively smaller letters, your eye doctor determines if you have 20/20 vision or if your vision shows signs of impairment.",
    parentIds: [6, 5],
    childIds: null,
    alternateNames: ["eye chart"],
  },
  {
    conceptId: 19,
    displayName: "Slit-lamp Examination",
    description:
      "A slit lamp allows your eye doctor to see the structures at the front of your eye under magnification. The microscope is called a slit lamp because it uses an intense line of light, a slit, to illuminate your cornea, iris, lens, and the space between your iris and cornea. The slit allows your doctor to view these structures in small sections, which makes it easier to detect any tiny abnormalities.",
    parentIds: [6, 7],
    childIds: null,
    alternateNames: null,
  },
  {
    conceptId: 9,
    displayName: "Diagnosing Diseases of the Liver",
    description:
      "Click a link in the 'learn more' section below for information on diagnostic procedures for disesases of the liver.",
    parentIds: [2],
    childIds: [10, 12, 18],
    alternateNames: null,
  },
  {
    conceptId: 10,
    displayName: "Diagnosing Fatty Liver Disease",
    description:
      "Click a link in the 'learn more' section below for information on diagnostic procedures for fatty liver disease.",
    parentIds: [9],
    childIds: [11],
    alternateNames: ["enzyme", "elevated liver enzyme"],
  },
  {
    conceptId: 11,
    displayName: "Liver Function Test",
    description:
      "A liver function test is one of a group of tests that check levels of certain enzymes and other proteins in your blood.\n\nSome of the tests look for enzymes that you’d find in your blood only when your liver is damaged or has a disease. Others check that the organ is working the way it should.",
    parentIds: [10],
    childIds: null,
    alternateNames: ["blood test"],
  },
  {
    conceptId: 12,
    displayName: "Diagnosing Cirrhosis",
    description:
      "Click a link in the 'learn more' section below for information on diagnostic procedures for cirrhosis disease.",
    parentIds: [9],
    childIds: [11],
    alternateNames: null,
  },
  {
    conceptId: 13,
    displayName: "Alanine transaminase (ALT) and aspartate transaminase (AST)",
    description:
      "These help your body break down protein and amino acid. Levels of both ALT and AST in your blood are usually low. High levels can mean that your liver is leaking these enzymes because it's damaged from cirrhosis or another disease. However, levels can still be normal if you have cirrhosis.",
    parentIds: [11],
    childIds: null,
    alternateNames: null,
  },
  {
    conceptId: 14,
    displayName: "Albumin Test",
    description:
      "Albumin is a protein that’s made by the liver. When the liver is damaged, the level of albumin in the blood falls.",
    parentIds: [11],
    childIds: null,
    alternateNames: null,
  },
  {
    conceptId: 15,
    displayName: "Bilirubim Test",
    description:
      "This is a yellow pigment that's left over when old blood cells are broken down. The liver normally removes bilirubin from the blood and gets rid of it in the stool. But when the liver isn't working properly, bilirubin builds up in the blood and can cause the skin and eyes to become yellow. This is called jaundice",
    parentIds: [11],
    childIds: null,
    alternateNames: null,
  },
  {
    conceptId: 16,
    displayName: "Creatinine",
    description:
      "This is a waste product made by your muscles. Your kidneys normally filter it out of your blood. A high creatinine level is a sign of kidney damage, which can happen in the late stages of cirrhosis.",
    parentIds: [11],
    childIds: null,
    alternateNames: null,
  },
  {
    conceptId: 17,
    displayName: "Creatinine",
    description:
      "Viral hepatitis is caused by viruses that damage your liver and can lead to cirrhosis. These tests check your blood for hepatitis A, B, and this is a waste product made by your muscles. Your kidneys normally filter it out of your blood. A high creatinine level is a sign of kidney damage, which can happen in the late stages of cirrhosis.",
    parentIds: [11, 18],
    childIds: null,
    alternateNames: null,
  },
  {
    conceptId: 18,
    displayName: "Hepatitis A",
    description:
      "A doctor can determine if you have hepatitis A by discussing your symptoms and ordering a blood test that can tell whether you have been recently infected with the virus that causes hepatitis A.",
    parentIds: [9],
    childIds: [17],
    alternateNames: null,
  },
  {
    conceptId: 20,
    displayName: "Treating Diseases of the Eye",
    description:
      "Eye diseases can cause discomfort and create further complications. Learn more in the links below about possible treatments.",
    parentIds: [3],
    childIds: [21, 22, 23],
    alternateNames: null,
  },
  {
    conceptId: 21,
    displayName: "Treating Glaucoma",
    description:
      "A doctor can determine if you have hepatitis A by discussing your symptoms and ordering a blood test that can tell whether you have been recently infected with the virus that causes hepatitis A.",
    parentIds: [20],
    childIds: [26],
    alternateNames: null,
  },
  {
    conceptId: 22,
    displayName: "Treating Cataracts",
    description: "",
    parentIds: [20],
    childIds: [26],
    alternateNames: null,
  },
  {
    conceptId: 23,
    displayName: "Treating Dry Eye Syndrome",
    description:
      "A doctor can determine if you have hepatitis A by discussing your symptoms and ordering a blood test that can tell whether you have been recently infected with the virus that causes hepatitis A.",
    parentIds: [20],
    childIds: [24, 25],
    alternateNames: null,
  },
  {
    conceptId: 24,
    displayName: "Eye Drops",
    description:
      "Libricating eye drops can provide temporary relief for several eye discomforts, including dry eye syndrome. In addition to standard eye drops, if discomfort persists, patients can apply eye gel at night.",
    parentIds: [23],
    childIds: null,
    alternateNames: null,
  },
  {
    conceptId: 25,
    displayName: "Tear Duct Plugs",
    description:
      "To conserve moisture on the surface of the eye, your opthalmologist can insert small plugs in your tear ducts that slow the draining of your natural tears. This is a non-invasive procedure and can be very effective.",
    parentIds: [23],
    childIds: null,
    alternateNames: null,
  },
  {
    conceptId: 26,
    displayName: "Laser Surgery",
    description:
      "Surgeons can use advanced equipment to perform seveal kinds of laser surgeries to improve vision. This includes procedures to remove cataracts, as well as cosmetic procedures such as LASIK.",
    parentIds: [21],
    childIds: null,
    alternateNames: null,
  },
  {
    conceptId: 27,
    displayName: "Treating Diseases of the Liver",
    description:
      "Surgeons can use advanced equipment to perform seveal kinds of laser surgeries to improve vision. This includes procedures to remove cataracts, as well as cosmetic procedures such as LASIK.",
    parentIds: [3],
    childIds: [28, 29],
    alternateNames: null,
  },
  {
    conceptId: 28,
    displayName: "Treating Fatty Liver Disease",
    description:
      "Fatty Liver can be treated and reversed in several ways. Healthy diet and exercise will contribute to better cholesterol levels and the reduction of liver enzyme. Lipid-lowering drugs can also be prescribed in some cases.",
    parentIds: [27],
    childIds: null,
    alternateNames: null,
  },
  {
    conceptId: 29,
    displayName: "Treating Cirrhosis",
    description:
      "This disease cannot be cured but treating Cirrhosis can prevent further damage to the liver. Healthy diet and exercise can contribute to slowing the progression.",
    parentIds: [27],
    childIds: null,
    alternateNames: null,
  },
];
