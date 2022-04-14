<?
if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
	die();
?>

<?//  $asset->addJs(SITE_TEMPLATE_PATH.'/js/main.js') ?>
<!--	</body>-->
<!--</html>-->

<div class="sticky-push"></div>
</div>

<footer>
    <div class="sticky-footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <address>
                        <?$APPLICATION->IncludeFile(
                            SITE_DIR."include/phone1.php",
                            array(),
                            array(
                                "MODE" => "html"
                            )
                        );?>

                        <?$APPLICATION->IncludeFile(
                            SITE_DIR."include/address.php",
                            array(),
                            array(
                                "MODE" => "html"
                            )
                        );?>

                        <br>
                    </address>
                </div>

                <div class="col-md-4 col-md-push-4">
                    <div class="copyright">
                        Данный шаблон предоставлен компанией<br/>© <a href="http://www.intervolga.ru">ИНТЕРВОЛГА</a> для
                        Академии 1С-Битрикс
                    </div>
                </div>

                <div class="col-md-4 col-md-pull-4 hidden-print">
                    <ul class="list-inline social-links">
                        <?$APPLICATION->IncludeFile(
                            SITE_DIR."include/social-links.php",
                            array(),
                            array(
                                "MODE" => "html"
                            )
                        );?>

                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>

<!--ОБЯЗАТЕЛЬНО ПОДКЛЮЧИТЕ ЭТИ СКРИПТЫ И СТИЛИ-->
<?$asset->addJs(SITE_TEMPLATE_PATH.'/js/vendor/jquery.min.js')?>
<?$asset->addJs(SITE_TEMPLATE_PATH.'/js/vendor/bootstrap/collapse.js')?>
<?$asset->addJs(SITE_TEMPLATE_PATH.'/js/vendor/bootstrap/tooltip.js')?>
<?$asset->addJs(SITE_TEMPLATE_PATH.'/js/vendor/plugins.js')?>
<?$asset->addJs(SITE_TEMPLATE_PATH.'/js/vendor/jquery.touchSwipe.js')?>
<?$asset->addJs(SITE_TEMPLATE_PATH.'/js/vendor/jquery.ba-throttle-debounce.min.js')?>
<?$asset->addJs(SITE_TEMPLATE_PATH.'/js/vendor/cookesHelp.js')?>
<?$asset->addJs(SITE_TEMPLATE_PATH.'/js/vendor/bootstrap-switch.min.js')?>
<?$asset->addJs(SITE_TEMPLATE_PATH.'/js/vendor/jquery.carouFredSel-packed.js')?>
<?$asset->addJs(SITE_TEMPLATE_PATH.'/js/main.js')?>

<!--<script src="js/vendor/jquery.min.js"></script>-->
<!--<script src="js/vendor/bootstrap/collapse.js"></script>-->
<!--<script src="js/vendor/bootstrap/tooltip.js"></script>-->
<!--<script src="js/vendor/plugins.js"></script>-->
<!--<script src="js/vendor/jquery.touchSwipe.js"></script>-->
<!--<script src="js/vendor/jquery.ba-throttle-debounce.min.js"></script>-->

<!--Уникальные JS для данной страницы-->

<!--ОБЯЗАТЕЛЬНО ПОДКЛЮЧИТЕ ЭТИ СКРИПТЫ И СТИЛИ-->
<!--<script src="js/main.js"></script>-->

</body>
</html>