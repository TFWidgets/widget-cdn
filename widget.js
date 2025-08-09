(function() {
    'use strict';
    
    // Конфигурация по умолчанию
    const defaultConfig = {
        apiUrl: 'https://your-api.com',
        theme: 'light',
        position: 'bottom-right'
    };
    
    // Функция инициализации виджета
    function initWidget(customConfig = {}) {
        const config = { ...defaultConfig, ...customConfig };
        
        // Создание DOM элемента виджета
        const widgetContainer = document.createElement('div');
        widgetContainer.id = 'my-widget';
        widgetContainer.className = 'widget-container';
        
        // Стили виджета
        const styles = `
            .widget-container {
                position: fixed;
                ${config.position.includes('bottom') ? 'bottom: 20px;' : 'top: 20px;'}
                ${config.position.includes('right') ? 'right: 20px;' : 'left: 20px;'}
                z-index: 10000;
                width: 300px;
                background: ${config.theme === 'dark' ? '#333' : '#fff'};
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                font-family: Arial, sans-serif;
            }
        `;
        
        // Добавление стилей
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
        
        // Содержимое виджета
        widgetContainer.innerHTML = `
            <div style="padding: 20px;">
                <h3>Мой Виджет</h3>
                <p>Версия: 1.0.0</p>
                <button onclick="this.parentElement.parentElement.style.display='none'">
                    Закрыть
                </button>
            </div>
        `;
        
        // Добавление виджета на страницу
        document.body.appendChild(widgetContainer);
        
        console.log('Widget initialized with config:', config);
    }
    
    // Автоматическая инициализация при загрузке DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initWidget(window.widgetConfig);
        });
    } else {
        initWidget(window.widgetConfig);
    }
    
    // Глобальный доступ к функции инициализации
    window.MyWidget = { init: initWidget };
})();
