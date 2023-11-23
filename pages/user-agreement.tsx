import variants from 'components/store/lib/variants';
import color from 'components/store/lib/ui.colors';
import { devices } from 'components/store/lib/Devices';
import {
  Container,
  Wrapper,
  Content,
} from 'components/store/storeLayout/common';
import StoreLayout from 'components/store/storeLayout/layouts';
import styled from 'styled-components';
import Link from 'next/link';
import SEOstatic from 'components/store/SEO/SEOstatic';
import { baseUrl } from '../common/constant';
const PrivacyNotic = () => {
  return (
    <>
      <SEOstatic
        page={{
          name: 'Пользовательское соглашение',
          url: '/user-agreement',
          desc: 'Интернет-магазин ivill Пользовательское соглашение',
          keywords: 'Интернет-магазин ivill',
        }}
        image={`${baseUrl}/fingarden.svg`}
      />
      <Container
        variants={variants.fadInOut}
        key="profile-page"
        initial="start"
        animate="middle"
        exit="end"
        flex_direction="column"
        justify_content="center"
        align_items="center"
        padding="200px 0"
        bg_color={color.textPrimary}
      >
        <Wrapper>
          <Content
            flex_direction="column"
            justify_content="flex-start"
            gap="30px"
          >
            <Headers>Уведомление о конфиденциальности</Headers>
            <Contents>
              <b>Последнее обновление 18/10/2023</b>
            </Contents>
            <Contents>
              Это уведомление о конфиденциальности для{' '}
              <Link href="https://ivill.ru">
                <Links>ivill.ru</Links>
              </Link>{' '}
              («Компания», «мы», «нас» или «наш») описывает, как и почему мы
              можем собирать, хранить, использовать и/или делиться
              («обрабатывать») вашу информацию, когда вы используете наши услуги
              ("Услуги"), например, когда вы:%0D%0AВопросы или проблемы?
              Ознакомление с этим уведомлением о конфиденциальности поможет вам
              понять свои права и варианты выбора в отношении
              конфиденциальности. Если вы не согласны с нашей политикой и
              практикой, пожалуйста, не пользуйтесь нашими Услугами. Если у вас
              все еще есть какие-либо вопросы или проблемы, пожалуйста,
              свяжитесь с нами по адресу{' '}
              <Link href="mailto:info@fingarden.ru">
                <Links>info@fingarden.ru</Links>
              </Link>
              .
            </Contents>
            <Headers>Резюме ключевых моментов</Headers>
            <Contents>
              <i>
                В этом кратком изложении представлены ключевые моменты из нашего
                уведомления о конфиденциальности, но вы можете узнать более
                подробную информацию по любой из этих тем, щелкнув ссылку после
                каждого ключевого пункта или воспользовавшись нашим оглавлением
                ниже, чтобы найти нужный раздел. Вы также можете нажать{' '}
                <Link href="#table-of-content">
                  <Links>здесь</Links>
                </Link>
                , чтобы перейти непосредственно к оглавлению.
              </i>
            </Contents>
            <Contents>
              <b>Какую личную информацию мы обрабатываем?</b> Когда вы
              посещаете, используете или перемещаетесь по нашим Сервисам, мы
              можем обрабатывать личную информацию в зависимости от того, как вы
              взаимодействуете с{' '}
              <Link href="https://ivill.ru">
                <Links>ivill.ru</Links>
              </Link>{' '}
              и Сервисами, какой выбор вы делаете, а также какие продукты и
              функции используете. нажать{' '}
              <Link href="#personal-information">
                <Links>здесь</Links>
              </Link>
              , чтобы узнать больше.
            </Contents>
            <Contents>
              <b>
                Обрабатываем ли мы какую-либо конфиденциальную личную
                информацию?
              </b>{' '}
              Мы не обрабатываем конфиденциальную личную информацию.
            </Contents>
            <Contents>
              <b>Получаем ли мы какую-либо информацию от третьих лиц?</b> Мы
              можем получать информацию из общедоступных баз данных,
              маркетинговых партнеров, платформ социальных сетей и других
              внешних источников. нажать{' '}
              <Link href="#other-resources">
                <Links>здесь</Links>
              </Link>
              , чтобы узнать больше.
            </Contents>
            <Contents>
              <b>Как мы обрабатываем вашу информацию?</b> Мы обрабатываем вашу
              информацию, чтобы предоставлять, улучшать и администрировать наши
              Сервисы, общаться с вами, обеспечивать безопасность и
              предотвращать мошенничество, а также соблюдать законы. Мы также
              можем обрабатывать вашу информацию для других целей с вашего
              согласия. Мы обрабатываем вашу информацию только тогда, когда у
              нас есть веская юридическая причина для этого. нажать{' '}
              <Link href="#info-use">
                <Links>здесь</Links>
              </Link>
              , чтобы узнать больше.
            </Contents>
            <Contents>
              <b>
                В каких ситуациях и каким сторонам мы передаем личную
                информацию?
              </b>{' '}
              Мы можем делиться информацией в определенных ситуациях и с
              определенными третьими лицами. нажать{' '}
              <Link href="#who-share">
                <Links>здесь</Links>
              </Link>
              , чтобы узнать больше.
            </Contents>
            <Contents>
              <b>Каковы ваши права?</b> В зависимости от того, где вы находитесь
              географически, применимый закон о конфиденциальности может
              означать, что у вас есть определенные права в отношении вашей
              личной информации. нажать{' '}
              <Link href="#privacy-rights">
                <Links>здесь</Links>
              </Link>
              , чтобы узнать больше.
            </Contents>
            <Contents>
              <b>Как вы реализуете свои права?</b> Самый простой способ
              воспользоваться своими правами — заполнить нашу форму запроса
              субъекта данных, доступную здесь, или связаться с нами. Мы
              рассмотрим любой запрос и примем меры в соответствии с применимыми
              законами о защите данных. Хотите узнать больше о том, что{' '}
              <Link href="https://ivill.ru">
                <Links>ivill.ru</Links>
              </Link>{' '}
              делает с любой информацией, которую мы собираем? нажать{' '}
              <Link href="#toc">
                <Links>здесь</Links>
              </Link>
              , чтобы ознакомиться с уведомлением полностью.
            </Contents>
            <Headers id="table-of-content">Содержание</Headers>
            <ListNumbers>
              <li>
                <Link href="#personal-information">
                  <Links>КАКУЮ ИНФОРМАЦИЮ МЫ СОБИРАЕМ</Links>
                </Link>
              </li>
              <li>
                <Link href="#info-use">
                  <Links>КАК МЫ ОБРАБАТЫВАЕМ ВАШУ ИНФОРМАЦИЮ</Links>
                </Link>
              </li>
              <li>
                <Link href="#who-share">
                  <Links>
                    КОГДА И КОМУ МЫ ДЕЛИМСЯ ВАШЕЙ ЛИЧНОЙ ИНФОРМАЦИЕЙ?
                  </Links>
                </Link>
              </li>
              <li>
                <Link href="#cookies">
                  <Links>
                    ИСПОЛЬЗУЕМ ЛИ МЫ ФАЙЛЫ COOKIES И ДРУГИЕ ТЕХНОЛОГИИ
                    ОТСЛЕЖИВАНИЯ?
                  </Links>
                </Link>
              </li>
              <li>
                <Link href="#social-logins">
                  <Links>КАК МЫ ОБРАЩАЕМСЯ С ВАШИМИ СОЦИАЛЬНЫМИ ВХОДАМИ?</Links>
                </Link>
              </li>
              <li>
                <Link href="#intl-transfer">
                  <Links>
                    ПЕРЕДАЕТСЯ ЛИ ВАША ИНФОРМАЦИЯ НА МЕЖДУНАРОДНОМ УРОВНЕ?
                  </Links>
                </Link>
              </li>
              <li>
                <Link href="#inforetain">
                  <Links>КАК ДОЛГО МЫ ХРАНИМ ВАШУ ИНФОРМАЦИЮ?</Links>
                </Link>
              </li>
              <li>
                <Link href="#infomoiners">
                  <Links>
                    СОБИРАЕМ ЛИ МЫ ИНФОРМАЦИЮ ОТ НЕСОВЕРШЕННОЛЕТНИХ?
                  </Links>
                </Link>
              </li>
              <li>
                <Link href="#privacy-rights">
                  <Links>КАКОВЫ ВАШИ ПРАВА НА КОНФИДЕНЦИАЛЬНОСТЬ?</Links>
                </Link>
              </li>
              <li>
                <Link href="#DNT">
                  <Links>КОНТРОЛЬ ДЛЯ ФУНКЦИЙ НЕ ОТСЛЕЖИВАТЬ</Links>
                </Link>
              </li>
              <li>
                <Link href="#policy-update">
                  <Links>ДЕЛАЕМ ЛИ МЫ ОБНОВЛЕНИЯ ЭТОГО УВЕДОМЛЕНИЯ?</Links>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <Links>
                    КАК ВЫ МОЖЕТЕ СВЯЗАТЬСЯ С НАМИ ПО ЭТОМУ УВЕДОМЛЕНИЮ?
                  </Links>
                </Link>
              </li>
              <li>
                <Link href="#request">
                  <Links>
                    КАК ВЫ МОЖЕТЕ ПРОСМОТРЕТЬ, ОБНОВИТЬ ИЛИ УДАЛИТЬ ДАННЫЕ,
                    КОТОРЫЕ МЫ СОБИРАЕМ ОТ ВАС?
                  </Links>
                </Link>
              </li>
            </ListNumbers>
            <Headers id="personal-information">
              1: КАКУЮ ИНФОРМАЦИЮ МЫ СОБИРАЕМ
            </Headers>
            <h3>Личная информация, которую вы раскрываете нам</h3>
            <Contents>
              <b>Вкратце:</b> мы собираем личную информацию, которую вы нам
              предоставляете.
            </Contents>
            <Contents>
              Мы собираем личную информацию, которую вы добровольно
              предоставляете нам, когда регистрируетесь в Сервисах, выражаете
              заинтересованность в получении информации о нас или наших
              продуктах и Сервисах, когда вы участвуете в деятельности Сервисов
              или иным образом, когда вы связываетесь с нами.
            </Contents>
            <Contents>
              <b>Конфиденциальная информация.</b> Мы не обрабатываем
              конфиденциальную информацию.
            </Contents>
            <Contents>
              Вся личная информация, которую вы нам предоставляете, должна быть
              достоверной, полной и точной, и вы должны уведомлять нас о любых
              изменениях такой личной информации.
            </Contents>
            <h3>Автоматически собираемая информация</h3>
            <Contents>
              <b>Вкратце:</b> некоторая информация, такая как ваш адрес
              интернет-протокола (IP) и/или характеристики браузера и
              устройства, собирается автоматически, когда вы посещаете наши
              Сервисы.
            </Contents>
            <Contents>
              Мы автоматически собираем определенную информацию, когда вы
              посещаете, используете или перемещаетесь по Услугам. Эта
              информация не раскрывает вашу конкретную личность (например, ваше
              имя или контактную информацию), но может включать информацию об
              устройстве и использовании, например ваш IP-адрес, характеристики
              браузера и устройства, операционную систему, языковые настройки,
              URL-адреса ссылок, имя устройства, страну, местоположение. ,
              информацию о том, как и когда вы используете наши Услуги, и другую
              техническую информацию. Эта информация в первую очередь необходима
              для обеспечения безопасности и работы наших Сервисов, а также для
              нашей внутренней аналитики и отчетности.
            </Contents>
            <Contents>
              Как и многие компании, мы также собираем информацию с помощью
              файлов cookie и аналогичных технологий.
            </Contents>
            <Headers id="#info-use">
              2: КАК МЫ ОБРАБАТЫВАЕМ ВАШУ ИНФОРМАЦИЮ
            </Headers>
            <Contents>
              <b>Вкратце:</b> мы обрабатываем вашу информацию, чтобы
              предоставлять, улучшать и администрировать наши Сервисы, общаться
              с вами, обеспечивать безопасность и предотвращать мошенничество, а
              также соблюдать законы. Мы также можем обрабатывать вашу
              информацию для других целей с вашего согласия.
            </Contents>
            <Contents>
              <b>
                Мы обрабатываем вашу личную информацию по разным причинам, в
                зависимости от того, как вы взаимодействуете с нашими Услугами,
                в том числе:
              </b>
            </Contents>
            <Headers id="who-share">
              3: КОГДА И КОМУ МЫ ДЕЛИМСЯ ВАШЕЙ ЛИЧНОЙ ИНФОРМАЦИЕЙ?
            </Headers>
            <Contents>
              <b>Вкратце:</b> мы можем делиться информацией в определенных
              ситуациях, описанных в этом разделе, и/или со следующими третьими
              лицами.
            </Contents>
            <Contents>
              Нам может потребоваться предоставить вашу личную информацию в
              следующих ситуациях:
            </Contents>
            <ListsDots>
              <li>
                <b>Деловые трансферы.</b> Мы можем делиться или передавать вашу
                информацию в связи или во время переговоров о любом слиянии,
                продаже активов компании, финансировании или приобретении всего
                или части нашего бизнеса другой компании.
              </li>
              <li>
                <b>Филиалы.</b> Мы можем передавать вашу информацию нашим
                аффилированным лицам, и в этом случае мы потребуем от этих
                аффилированных лиц соблюдения настоящего уведомления о
                конфиденциальности. К аффилированным лицам относятся наша
                материнская компания и любые дочерние компании, партнеры по
                совместным предприятиям или другие компании, которые мы
                контролируем или которые находятся под нашим общим контролем.
              </li>
              <li>
                <b>Деловые партнеры.</b> Мы можем передавать вашу информацию
                нашим деловым партнерам, чтобы предлагать вам определенные
                продукты, услуги или рекламные акции.
              </li>
            </ListsDots>
            <Headers id="cookies">
              4: ИСПОЛЬЗУЕМ ЛИ МЫ ФАЙЛЫ COOKIES И ДРУГИЕ ТЕХНОЛОГИИ
              ОТСЛЕЖИВАНИЯ?
            </Headers>
            <Contents>
              <b>Вкратце:</b> мы можем использовать файлы cookie и другие
              технологии отслеживания для сбора и хранения вашей информации.
            </Contents>
            <Contents>
              Мы можем использовать файлы cookie и аналогичные технологии
              отслеживания (например, веб-маяки и пиксели) для доступа или
              хранения информации. Конкретная информация о том, как мы
              используем такие технологии и как вы можете отказаться от
              определенных файлов cookie, изложена в нашем Уведомлении об
              использовании файлов cookie.
            </Contents>
            <Headers id="social-logins">
              5: КАК МЫ ОБРАЩАЕМСЯ С ВАШИМИ СОЦИАЛЬНЫМИ ВХОДАМИ?
            </Headers>
            <Contents>
              <b>Вкратце:</b> если вы решите зарегистрироваться или войти в наши
              службы с помощью учетной записи в социальной сети, у нас может
              быть доступ к определенной информации о вас.
            </Contents>
            <Contents>
              Наши Услуги предлагают вам возможность зарегистрироваться и войти
              в систему, используя данные вашей учетной записи в сторонней
              социальной сети (например, ваши логины в Facebook или Twitter).
              Если вы решите это сделать, мы получим определенную информацию о
              вас от вашего поставщика социальных сетей. Информация о профиле,
              которую мы получаем, может различаться в зависимости от
              соответствующего поставщика социальных сетей, но часто включает
              ваше имя, адрес электронной почты, список друзей и изображение
              профиля, а также другую информацию, которую вы решите сделать
              общедоступной на такой платформе социальной сети.
            </Contents>
            <Contents>
              Мы будем использовать полученную информацию только в целях,
              описанных в настоящем уведомлении о конфиденциальности или иным
              образом разъясненных вам в соответствующих Сервисах. Обратите
              внимание, что мы не контролируем и не несем ответственности за
              другое использование вашей личной информации вашим сторонним
              поставщиком социальных сетей. Мы рекомендуем вам ознакомиться с их
              уведомлением о конфиденциальности, чтобы понять, как они собирают,
              используют и передают вашу личную информацию, а также как вы
              можете установить свои настройки конфиденциальности на их сайтах и
              в приложениях.
            </Contents>
            <Headers>
              6: ПЕРЕДАЕТСЯ ЛИ ВАША ИНФОРМАЦИЯ НА МЕЖДУНАРОДНОМ УРОВНЕ?
            </Headers>
            <Contents>
              <b>Вкратце:</b> мы можем передавать, хранить и обрабатывать вашу
              информацию в странах, отличных от вашей страны.
            </Contents>
            <Contents>
              Наши серверы расположены в. Если вы получаете доступ к нашим
              Услугам извне, имейте в виду, что ваша информация может
              передаваться, храниться и обрабатываться нами на наших объектах и
              теми третьими лицами, которым мы можем передавать вашу личную
              информацию (см. «
              <Link href="#who-share">
                <Links>КОГДА И КОМУ МЫ ПЕРЕДАЕМ ВАШУ ЛИЧНУЮ ИНФОРМАЦИЮ?</Links>
              </Link>
              » выше), в и других странах.
            </Contents>
            <Contents>
              Если вы являетесь резидентом Европейской экономической зоны (ЕЭЗ)
              или Соединенного Королевства (Великобритания), то в этих странах
              не обязательно действуют законы о защите данных или другие
              аналогичные законы, столь же всеобъемлющие, как в вашей стране.
              Тем не менее, мы предпримем все необходимые меры для защиты вашей
              личной информации в соответствии с настоящим уведомлением о
              конфиденциальности и действующим законодательством.
            </Contents>
            <Headers id="inforetain">
              7: КАК ДОЛГО МЫ ХРАНИМ ВАШУ ИНФОРМАЦИЮ?
            </Headers>
            <Contents>
              <b>Вкратце:</b> мы храним вашу информацию до тех пор, пока это
              необходимо для достижения целей, изложенных в этом уведомлении о
              конфиденциальности, если иное не требуется по закону.
            </Contents>
            <Contents>
              Мы будем хранить вашу личную информацию только до тех пор, пока
              это необходимо для целей, изложенных в этом уведомлении о
              конфиденциальности, за исключением случаев, когда более длительный
              срок хранения требуется или разрешен законом (например,
              налоговыми, бухгалтерскими или другими правовыми требованиями).
            </Contents>
            <Contents>
              Если у нас нет постоянной законной деловой необходимости
              обрабатывать вашу личную информацию, мы либо удалим, либо
              анонимизируем такую информацию, либо, если это невозможно
              (например, из-за того, что ваша личная информация хранилась в
              архивах резервных копий), мы безопасно хранить вашу личную
              информацию и изолировать ее от дальнейшей обработки до тех пор,
              пока удаление не станет возможным.
            </Contents>
            <Headers>
              8: СОБИРАЕМ ЛИ МЫ ИНФОРМАЦИЮ ОТ НЕСОВЕРШЕННОЛЕТНИХ?
            </Headers>
            <Contents id="infomoiners">
              <b>Вкратце:</b> мы сознательно не собираем данные и не продаем
              данные детям младше 18 лет.
            </Contents>
            <Contents>
              Мы сознательно не запрашиваем данные у детей младше 18 лет и не
              продаем их. Используя Услуги, вы подтверждаете, что вам
              исполнилось 18 лет или что вы являетесь родителем или опекуном
              такого несовершеннолетнего и даете согласие на использование Услуг
              таким несовершеннолетним иждивенцем. Если мы узнаем, что была
              собрана личная информация от пользователей младше 18 лет, мы
              деактивируем учетную запись и примем разумные меры для
              незамедлительного удаления таких данных из наших записей. Если вам
              станут известны какие-либо данные, которые мы могли получить от
              детей младше 18 лет, свяжитесь с нами по адресу{' '}
              <Link href="mailto:info@fingarden.ru">
                <Links>info@fingarden.ru</Links>
              </Link>
              .
            </Contents>
            <Headers id="privacy-rights">
              9: КАКОВЫ ВАШИ ПРАВА НА КОНФИДЕНЦИАЛЬНОСТЬ?
            </Headers>
            <Contents>
              <b>Вкратце:</b> вы можете просмотреть, изменить или прекратить
              действие своей учетной записи в любое время.
            </Contents>
            <Contents>
              Если вы находитесь в ЕЭЗ или Великобритании и считаете, что мы
              незаконно обрабатываем вашу личную информацию, вы также имеете
              право подать жалобу в местный орган по надзору за защитой данных.
              Вы можете найти их контактные данные здесь :{' '}
              <Link href="https://ec.europa.eu/newsroom/article29/items/612080">
                <Links>
                  https://ec.europa.eu/newsroom/article29/items/612080
                </Links>
              </Link>
            </Contents>
            <Contents>
              Если вы находитесь в Швейцарии, контактные данные органов по
              защите данных доступны здесь.
              <Link href="https://www.edoeb.admin.ch/edoeb/en/home.html">
                <Links>https://www.edoeb.admin.ch/edoeb/en/home.html</Links>
              </Link>
            </Contents>
            <Contents>
              <b>Отзыв вашего согласия:</b> если мы полагаемся на ваше согласие
              на обработку вашей личной информации, которое может быть явным
              и/или подразумеваемым согласием в зависимости от применимого
              законодательства, вы имеете право отозвать свое согласие в любое
              время. Вы можете отозвать свое согласие в любое время, связавшись
              с нами, используя контактную информацию, указанную в разделе «
              <Link href="#contact">
                <Links>
                  КАК ВЫ МОЖЕТЕ СВЯЗАТЬСЯ С НАМИ ПО ЭТОМУ УВЕДОМЛЕНИЮ?
                </Links>
              </Link>
              » ниже.
            </Contents>
            <Contents>
              Однако обратите внимание, что это не повлияет на законность
              обработки до ее отзыва, а также, когда это разрешено применимым
              законодательством, не повлияет на обработку вашей личной
              информации, осуществляемую на законных основаниях обработки, кроме
              согласия.
            </Contents>
            <h3>Информация Об Учетной Записи</h3>
            <Contents>
              Если вы в любое время захотите просмотреть или изменить информацию
              в своей учетной записи или прекратить действие своей учетной
              записи, вы можете:%0D%0AUПо вашему запросу прекратить действие
              вашей учетной записи мы деактивируем или удалим вашу учетную
              запись и информацию из наших активных баз данных. Тем не менее, мы
              можем хранить некоторую информацию в наших файлах для
              предотвращения мошенничества, устранения неполадок, помощи в любых
              расследованиях, обеспечения соблюдения наших юридических условий
              и/или соблюдения применимых правовых требований.
            </Contents>
            <Headers id="DNT">10: КОНТРОЛЬ ДЛЯ ФУНКЦИЙ НЕ ОТСЛЕЖИВАТЬ</Headers>
            <Contents>
              Большинство веб-браузеров, а также некоторые мобильные
              операционные системы и мобильные приложения включают функцию «Не
              отслеживать» («DNT») или параметр, который вы можете активировать,
              чтобы сигнализировать о том, что вы предпочитаете
              конфиденциальность, чтобы данные о ваших действиях в Интернете не
              отслеживались и не собирались. На данном этапе не разработан
              единый технологический стандарт распознавания и реализации
              сигналов DNT. Таким образом, в настоящее время мы не реагируем на
              сигналы браузера DNT или любой другой механизм, который
              автоматически сообщает о вашем решении не отслеживаться в
              Интернете. Если будет принят стандарт онлайн-отслеживания,
              которому мы должны следовать в будущем, мы сообщим вам об этой
              практике в пересмотренной версии настоящего уведомления о
              конфиденциальности.
            </Contents>
            <Headers id="policy-update">
              11: ДЕЛАЕМ ЛИ МЫ ОБНОВЛЕНИЯ ЭТОГО УВЕДОМЛЕНИЯ?
            </Headers>
            <Contents>
              <b>Вкратце:</b> Да, мы будем обновлять это уведомление по мере
              необходимости, чтобы соответствовать применимым законам.
            </Contents>
            <Contents>
              Мы можем время от времени обновлять это уведомление о
              конфиденциальности. Обновленная версия будет отмечена обновленной
              датой «Пересмотрено», и обновленная версия вступит в силу, как
              только станет доступной. Если мы внесем существенные изменения в
              это уведомление о конфиденциальности, мы можем уведомить вас либо
              путем размещения уведомления о таких изменениях на видном месте,
              либо путем отправки вам уведомления напрямую. Мы рекомендуем вам
              регулярно просматривать это уведомление о конфиденциальности,
              чтобы быть в курсе того, как мы защищаем вашу информацию.
            </Contents>
            <Headers id="contact">
              12: КАК ВЫ МОЖЕТЕ СВЯЗАТЬСЯ С НАМИ ПО ЭТОМУ УВЕДОМЛЕНИЮ?
            </Headers>
            <Contents>
              Если у вас есть вопросы или комментарии по этому уведомлению, вы
              можете написать нам по адресу:{' '}
              <Link href="mailto:info@fingarden.ru">
                <Links>info@fingarden.ru</Links>
              </Link>
            </Contents>
            <Headers id="request">
              13: КАК ВЫ МОЖЕТЕ ПРОСМОТРЕТЬ, ОБНОВИТЬ ИЛИ УДАЛИТЬ ДАННЫЕ,
              КОТОРЫЕ МЫ СОБИРАЕМ ОТ ВАС?
            </Headers>
            <Contents>
              В соответствии с действующим законодательством вашей страны вы
              можете иметь право запросить доступ к личной информации, которую
              мы получаем от вас, изменить эту информацию или удалить ее. Чтобы
              запросить просмотр, обновление или удаление вашей личной
              информации, отправьте форму запроса, нажав{' '}
              <Link href="mailto:info@fingarden.ru">
                <Links>здесь</Links>
              </Link>
              .
            </Contents>
          </Content>
        </Wrapper>
      </Container>
    </>
  );
};

const Headers = styled.h1`
  width: 100%;
  text-align: start;
  font-family: 'Anticva';
  font-size: 1.5rem;
  @media ${devices.mobileL} {
    max-width: 95vw;
  }
`;

const Contents = styled.span`
  width: 80%;
  text-align: start;
  line-height: 1.5rem;
  font-size: 1rem;
  @media ${devices.mobileL} {
    width: 100%;
  }
`;

const Links = styled.span`
  color: ${color.hoverBtnBg};
  &:hover {
    color: ${color.ok};
  }
`;

const ListsDots = styled.ul`
  width: 80%;
  text-align: start;
  padding-left: 15px;
  line-height: 1.5rem;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  li {
    list-style-type: circle;
  }
  @media ${devices.mobileL} {
    width: 100%;
  }
`;
const ListNumbers = styled.ol`
  width: 80%;
  text-align: start;
  padding-left: 15px;
  line-height: 1.5rem;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  li {
    list-style-type: number;
  }
  @media ${devices.mobileL} {
    width: 100%;
  }
`;

PrivacyNotic.PageLayout = StoreLayout;

export default PrivacyNotic;
