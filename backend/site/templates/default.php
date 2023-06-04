<?php snippet('meta_information'); ?>
<?php snippet('robots'); ?>

<article>
  <header>
    <h1><?= $page->title() ?></h1>
  </header>
  <div class="text">
    <?= $page->text()->kirbytext() ?>
  </div>

</article>
