<?

use Bitrix\Main\Page\Asset;

if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
	die();

$asset = Asset::getInstance();
$bIsMainPage = $APPLICATION->GetCurPage(false) == SITE_DIR;
?>
<!DOCTYPE html>
<!--[if lt IE 8]>  <html class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if IE 8]>     <html class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]>  <html class="no-js"><![endif]-->
<head>
    <?$APPLICATION->ShowHead();?>
    <!--[if IE]>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><![endif]-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?$APPLICATION->ShowTitle();?></title>
    <meta name="keywords" content="Ключевые слова"/>
    <meta name="description" content="Описание страницы"/>

    <?$asset->addCss(SITE_TEMPLATE_PATH.'/css/common-styles.css')?>
    <link rel="icon" href="ico/favicon_bx.png">

    <!--[if lt IE 9]>
    <?$asset->addJs(SITE_TEMPLATE_PATH.'/js/vendor/modernizr-html5shiv-respond.min.js')?>
    <![endif]-->
    <!--[if gte IE 9]><!-->
    <?$asset->addJs(SITE_TEMPLATE_PATH.'/js/vendor/modernizr.min.js')?>
    <!--<![endif]-->
</head>
<body>
<!--[if lt IE 8]>
<p class="chromeframe">Вы используете <strong>устаревший </strong> браузер. Пожалуйста <a
        href="http://browsehappy.com/">
    обновите свой браузер</a> или <a href="http://www.google.com/chromeframe/?redirect=true">установите Google Chrome
    Frame</a> чтобы улучшить взаимодействие с сайтом.</p>
<![endif]-->
<?$APPLICATION->ShowPanel();?>
<div class="sticky-wrap">
    <header>
        <div class="header-main">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-xs-12">
                        <?if($bIsMainPage):?>
                            <span class="logo">
                                <div class="image">Intervolga.ru</div>
                                <div id="slogan-rand" class="slogan">
                                    <noscript>Сайты и реклама в интернете</noscript>
                                </div>
                            </span>
                        <?else:?>
                            <a class="logo" href="/">
                                <div class="image">Intervolga.ru</div>
                                <div id="slogan-rand" class="slogan">
                                    <noscript>Сайты и реклама в интернете</noscript>
                                </div>
                            </a>
                        <?endif;?>

                    </div>
                    <div class="col-sm-6 col-xs-12">
                        <div class="row">
                            <div class="col-lg-7 col-xs-12 hidden-xs">
                                <ul class="btn-list-inline">
                                    <?$APPLICATION->IncludeFile(
                                            SITE_DIR."include/slogan.php",
                                            array(),
                                            array(
                                                    "MODE" => "text"
                                            )
                                    );?>
                                </ul>
                            </div>
                            <div class="col-lg-5 col-xs-12 hidden-print">
                                <div class="input-group-search">
                                    <input type="text" class="form-control" placeholder="Поиск...">
                                    <button class="btn btn-link" type="button"><i class="fa fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <ul class="phone-list">
                            <li>
                                <?$APPLICATION->IncludeFile(
                                    SITE_DIR."include/phone1.php",
                                    array(),
                                    array(
                                        "MODE" => "html"
                                    )
                                );?>
                            </li>
                            <li>
                                <?$APPLICATION->IncludeFile(
                                    SITE_DIR."include/phone1.php",
                                    array(),
                                    array(
                                        "MODE" => "html"
                                    )
                                );?>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <?$APPLICATION->IncludeComponent(
        "bitrix:menu",
        "menu",
        Array(
            "ALLOW_MULTI_SELECT" => "N",
            "CHILD_MENU_TYPE" => "left",
            "COMPONENT_TEMPLATE" => ".default",
            "DELAY" => "N",
            "MAX_LEVEL" => "1",
            "MENU_CACHE_GET_VARS" => "",
            "MENU_CACHE_TIME" => "3600",
            "MENU_CACHE_TYPE" => "N",
            "MENU_CACHE_USE_GROUPS" => "Y",
            "ROOT_MENU_TYPE" => "top",
            "USE_EXT" => "N"
        )
    );?>
    <?if($bIsMainPage):?>
        <?$APPLICATION->IncludeComponent("bitrix:news.list", "slider", Array(
            "COMPONENT_TEMPLATE" => ".default",
            "IBLOCK_TYPE" => "index",	// Тип информационного блока (используется только для проверки)
            "IBLOCK_ID" => "1",	// Код информационного блока
            "NEWS_COUNT" => "50",	// Количество новостей на странице
            "SORT_BY1" => "SORT",	// Поле для первой сортировки новостей
            "SORT_ORDER1" => "ASC",	// Направление для первой сортировки новостей
            "SORT_BY2" => "TIMESTAMP_X",	// Поле для второй сортировки новостей
            "SORT_ORDER2" => "DESC",	// Направление для второй сортировки новостей
            "FILTER_NAME" => "",	// Фильтр
            "FIELD_CODE" => array(	// Поля
                0 => "PREVIEW_PICTURE",
                1 => "",
                2 => "",
            ),
            "PROPERTY_CODE" => array(	// Свойства
                0 => "url",
                1 => "",
            ),
            "CHECK_DATES" => "Y",	// Показывать только активные на данный момент элементы
            "DETAIL_URL" => "",	// URL страницы детального просмотра (по умолчанию - из настроек инфоблока)
            "AJAX_MODE" => "N",	// Включить режим AJAX
            "AJAX_OPTION_JUMP" => "N",	// Включить прокрутку к началу компонента
            "AJAX_OPTION_STYLE" => "Y",	// Включить подгрузку стилей
            "AJAX_OPTION_HISTORY" => "N",	// Включить эмуляцию навигации браузера
            "AJAX_OPTION_ADDITIONAL" => "",	// Дополнительный идентификатор
            "CACHE_TYPE" => "A",	// Тип кеширования
            "CACHE_TIME" => "36000000",	// Время кеширования (сек.)
            "CACHE_FILTER" => "N",	// Кешировать при установленном фильтре
            "CACHE_GROUPS" => "Y",	// Учитывать права доступа
            "PREVIEW_TRUNCATE_LEN" => "",	// Максимальная длина анонса для вывода (только для типа текст)
            "ACTIVE_DATE_FORMAT" => "d.m.Y",	// Формат показа даты
            "SET_TITLE" => "N",	// Устанавливать заголовок страницы
            "SET_BROWSER_TITLE" => "N",	// Устанавливать заголовок окна браузера
            "SET_META_KEYWORDS" => "N",	// Устанавливать ключевые слова страницы
            "SET_META_DESCRIPTION" => "N",	// Устанавливать описание страницы
            "SET_LAST_MODIFIED" => "N",	// Устанавливать в заголовках ответа время модификации страницы
            "INCLUDE_IBLOCK_INTO_CHAIN" => "N",	// Включать инфоблок в цепочку навигации
            "ADD_SECTIONS_CHAIN" => "N",	// Включать раздел в цепочку навигации
            "HIDE_LINK_WHEN_NO_DETAIL" => "N",	// Скрывать ссылку, если нет детального описания
            "PARENT_SECTION" => "",	// ID раздела
            "PARENT_SECTION_CODE" => "",	// Код раздела
            "INCLUDE_SUBSECTIONS" => "N",	// Показывать элементы подразделов раздела
            "STRICT_SECTION_CHECK" => "N",	// Строгая проверка раздела для показа списка
            "DISPLAY_DATE" => "N",	// Выводить дату элемента
            "DISPLAY_NAME" => "Y",	// Выводить название элемента
            "DISPLAY_PICTURE" => "Y",	// Выводить изображение для анонса
            "DISPLAY_PREVIEW_TEXT" => "Y",	// Выводить текст анонса
            "PAGER_TEMPLATE" => ".default",	// Шаблон постраничной навигации
            "DISPLAY_TOP_PAGER" => "N",	// Выводить над списком
            "DISPLAY_BOTTOM_PAGER" => "N",	// Выводить под списком
            "PAGER_TITLE" => "Новости",	// Название категорий
            "PAGER_SHOW_ALWAYS" => "N",	// Выводить всегда
            "PAGER_DESC_NUMBERING" => "N",	// Использовать обратную навигацию
            "PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",	// Время кеширования страниц для обратной навигации
            "PAGER_SHOW_ALL" => "N",	// Показывать ссылку "Все"
            "PAGER_BASE_LINK_ENABLE" => "N",	// Включить обработку ссылок
            "SET_STATUS_404" => "N",	// Устанавливать статус 404
            "SHOW_404" => "N",	// Показ специальной страницы
            "MESSAGE_404" => "",	// Сообщение для показа (по умолчанию из компонента)
        ),
            false
        );?>

        <div class="activities-description-wrap">
            <div class="activities-description">
                <div class="container">
                    <div class="activities-inner">
                        <h3>Последние посещенные вами страницы</h3>
                        <ul>
                            <li><a href="#">Мы стали использовать новую ткань</a></li>
                            <li><a href="#">Главная страница</a></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mbl">
            <div class="row">
                <div class="col-md-12">
                    <div class="live-main">
                        <h5><a href="#">Новости</a></h5>
                        <div class="live-pagination">
                            <a class="prev" href="#prev"><i class="fa fa-angle-left"></i></a>
                            <a class="next" href="#next"><i class="fa fa-angle-right"></i></a>
                        </div>
                        <div class="live-list-wrap">
                            <div class="live-list">
                                <div class="live-list-item" id="live-1">
                                    <div class="live-item-body image">
                                        <a class="live-item-img" href=""><img src="img/live-list/img-1.jpg" alt=""/></a>
                                        <div class="live-item-body-over">
                                            <div class="live-item-description">
                                                <div class="description">Изобретение относится к области получения и применения...</div>
                                            </div>
                                            <div class="live-item-label">
                                                <i class="fa fa fa-twitter"></i>
                                                <a href="#">Новое веяние в одежде - получено прочное водостойкое соединение</a>
                                            </div>
                                            <span class="live-item-data">25 Декабря 2015</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="live-list-item" id="live-2">
                                    <div class="live-item-body image">
                                        <a class="live-item-img" href=""><img src="img/live-list/img-2.jpg" alt=""/></a>
                                        <div class="live-item-body-over">
                                            <div class="live-item-description">
                                                <div class="description">В следующем году состоится выставка одежды...</div>
                                            </div>
                                            <div class="live-item-label">
                                                <i class="fa fa fa-vk"></i>
                                                <a href="#">Международная выставка одежды Salon De Fashion</a>
                                            </div>
                                            <span class="live-item-data">22 Октября 2015</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="live-list-item" id="live-3">
                                    <div class="live-item-body">
                                        <div class="live-item-body-over">
                                            <div class="live-item-description">
                                                <div class="description">Для пошива нашей одежды мы стали использовать новую
                                                    инновационную ткань</div>
                                            </div>
                                            <div class="live-item-label">
                                                <a href="#">Мы стали использовать новую ткань</a>
                                            </div>
                                            <span class="live-item-data">2 Июня 2015</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="live-list-item" id="live-4">
                                    <div class="live-item-body">
                                        <div class="live-item-body-over">
                                            <div class="live-item-description">
                                                <div class="description">Мы расширяем свой размерный ряд. Теперь наша одежда будет
                                                    доступна большему количеству людей</div>
                                            </div>
                                            <div class="live-item-label">
                                                <a href="#">Размерный ряд</a>
                                            </div>
                                            <span class="live-item-data">30 Апреля 2015</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="live-list-item" id="live-5">
                                    <div class="live-item-body image">
                                        <a class="live-item-img" href=""><img src="img/live-list/img-3.jpg" alt=""/></a>
                                        <div class="live-item-body-over">
                                            <div class="live-item-description">
                                                <div class="description">С 20 по 23 февраля состоится...</div>
                                            </div>
                                            <div class="live-item-label">
                                                <i class="fa fa fa-twitter"></i>
                                                <a href="#">Форум производителей одежды в России</a>
                                            </div>
                                            <span class="live-item-data">22 Апреля 2014</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <?endif;?>

    <?if(ERROR_404 == 'Y'):?>
    <div class="page-not-found">
    <?else:?>
    <div class="container">
        <?if(!$bIsMainPage):?>
            <?$APPLICATION->IncludeComponent("bitrix:breadcrumb", "breadcrumb", Array(
                "PATH" => "",	// Путь, для которого будет построена навигационная цепочка (по умолчанию, текущий путь)
                "SITE_ID" => "s1",	// Cайт (устанавливается в случае многосайтовой версии, когда DOCUMENT_ROOT у сайтов разный)
                "START_FROM" => "0",	// Номер пункта, начиная с которого будет построена навигационная цепочка
            ),
                false
            );?>
        <h1><?$APPLICATION->ShowTitle(false);?></h1>
        <?endif;?>
    </div>
    <?endif;?>
    <div class="container">

						