POSTCSS

--> Catalogue des plug-ins : http://postcss.parts
--> Catalogue des plug-ins : https://github.com/postcss/postcss#plugins


PLUG-INS :

AUTOPREFIXER
Comme son nom l'indique Autoprefixer va vous permettre de rajouter de manière automatique les préfixes correspondants aux différents navigateurs. On va pouvoir le configurer pour lui dire quelle version des navigateurs il doit supporter. Ce plug-in n'ajoute pas de Polyfill, si vous utilisez des propriétés comme opacity il ne sera pas en mesure de rajouter les propriétés pour supporter les vieilles versions d'Internet Explorer. Il se charge seulement de rajouter des préfixes. Si vous voulez supporter les très vieux navigateurs, vous avez la possibilité d'utiliser un autre plug-in : CSSGrace

CSSNEXT
Si vous avez envie de travailler sur votre CSS en profitant des fonctionnalités offertes par les futures spécifications, vous pouvez le faire dès aujourd'hui en utilisant le plug-in CSSNext.

CSSNANO
CSSnano est un plug-in qui regroupe d'autres plug-ins PostCSS et qui permettent d'optimiser le CSS en supprimant par exemple les commentaires ou les espaces. Il est évidemment possible de personnaliser les différents composants qui sont utilisés par défaut à travers la configuration.

CSS-MQPACKER
CSS-MQPacker permet tout simplement de grouper les média query. Lorsque l'on travaille sur un projet assez conséquent, on va avoir tendance à séparer notre CSS en plusieurs fichiers. Chaque fichier servant un élément particulier. Le problème dans ce cas-là c'est que l'on se retrouve à utiliser plusieurs fois les mêmes média query dans plusieurs fichiers ce qui a pour effet de générer un CSS qui n'est pas forcément optimisé. Ce plug-in va permettre de regrouper les média query qui sont identiques.

PRECSS
PreCSS est un outil qui va nous permettre d'utiliser une syntaxe qui se rapproche de celle que l'on a l'habitude de voir avec SASS. C'est un plug-in qui injecte plusieurs fonctionnalités au niveau de notre CSS comme les variables, la possibilité d'utiliser des conditions et des boucles et l'inclusion de nouveaux CSS avec @import. C'est un plug-in que j'utilise pour effectuer une transition en douceur depuis SCSS. La plupart des fonctionnalités qui sont proposées ici sont disponibles à travers d'autres plug-ins qui se chargent seulement d'une tâche. Si par exemple vous ne souhaitez que la possibilité d'inclure les règles les unes dans les autres vous pouvez aussi utiliser le plug-in postcss-nested.

RUCKSACK
Rucksack propose une approche intéressante qui permet de travailler plus simplement. Plutôt que d'utiliser des mixins, il va modifier des propriétés déjà connues pour leur rajouter des fonctionnalités supplémentaires.

POSTCSS SPRITES
Postcss-sprites va parcourir l'ensemble des images qui sont utilisées dans votre CSS est automatiquement généré une Sprite afin d'optimiser le chargement des images sur le site. Il est évidemment possible de filtrer les images qui seront incluses dans cette Sprite.Il est évidemment possible de le configurer pour lui dire d'ignorer certaines images et lui expliquer comment travailler avec ces dernières.




SOURCE : http://www.grafikart.fr/tutoriels/html-css/postcss-663