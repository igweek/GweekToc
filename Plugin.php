<?php
if (!defined('__TYPECHO_ROOT_DIR__')) exit;

/**
 * Gweek 自制极简悬浮目录插件 <br>
 * 
 * 详细说明及插件更新，请查阅： <a target="_blank" href="https://github.com/igweek/GweekToc/" rel="noopener noreferrer">GweekTocc</a>
 * 
 * @package GweekToc
 * @author Gweek
 * @version 1.0.0
 * @link https://btw.pp.ua
 */

class GweekToc_Plugin implements Typecho_Plugin_Interface
{
    /**
     * 激活插件方法
     */
    public static function activate()
    {
        Typecho_Plugin::factory('Widget_Archive')->footer = array('GweekToc_Plugin', 'renderFooter');
    }

    /**
     * 禁用插件方法
     */
    public static function deactivate(){}

    /**
     * 配置面板
     */
    public static function config(Typecho_Widget_Helper_Form $form){}

    /**
     * 个人配置面板
     */
    public static function personalConfig(Typecho_Widget_Helper_Form $form){}

    /**
     * 核心渲染函数
     */
    public static function renderFooter()
    {
        $widget = Typecho_Widget::widget('Widget_Archive');
        if ($widget->is('single')) {
            $pluginUrl = Helper::options()->pluginUrl . '/GweekToc/';
            
            // 注意：版本号已更新为 1.0.3，强制浏览器重新加载 CSS
            echo '<link rel="stylesheet" href="' . $pluginUrl . 'style.css?v=1.0.3">';
            
            echo '
            <div id="gweek-toc-container">
                <div class="toc-header">文章目录 <span class="close-toc">&times;</span></div>
                <ul id="gweek-toc-list"></ul>
            </div>
            
            <div id="gweek-controls">
                <button id="gweek-to-top" class="gweek-btn" aria-label="Top">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 19V5M5 12l7-7 7 7"/>
                    </svg>
                </button>
                <button id="gweek-menu-btn" class="gweek-btn" aria-label="Menu">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>
            ';

            // 注意：版本号已更新为 1.0.3，强制浏览器重新加载 JS（解决点击不灵敏问题）
            echo '<script src="' . $pluginUrl . 'script.js?v=1.0.3"></script>';
        }
    }
}