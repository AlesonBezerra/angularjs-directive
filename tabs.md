### Componente Doca - Button Group
***

```html
<doca-tabs current-tab="currentTab" variant="">
	<doca-tab-item data-cy="" tab-key="PROCEDURE" click-fn="testClick()">Agendamento</doca-tab-item>
	<doca-tab-item data-cy="" tab-key="FINANCE" click-fn="testClick()">Financeiro</doca-tab-item>
</doca-tabs>
```
***
### Atributos:
***
|     Nome        |   Descrição                                               |        Obrigatório?       |        Padrão        |
| --------------  | --------------------------------------------------------- | ------------------------- | -------------------- |
| current-tab     | nome da tab-key atual, deverá ser passado para que se inicie com uma tab ativa    |         -            |           -          |
| tab-key   | nome da chave usada para fazer referência a tab    |        	  &radic;             |    -    |
| click-fn       | função de callback quando clicar em alguma tab			  |        	   -       	      | - |
| variant      | classe do doca ex: primary, info, danger...		  |        	   -       	      | primary |
| data-cy     | tab-{ NOME_DA_FUNCIONALIDADE }-{ NOME_DO_CAMPO } |        	     &radic;         	      | - |

***

### Javascript:
***

```js
$scope.currentTab = 'PROCEDURE'
```

***
> Note: Caso tenha um função de callback no click da tab e precise fazer uma verificação/validação no `$scope.currentTab` talvez seja necessário fazer o uso do $timeOut por conta do $digest do AngularJs (Acontece em alguns casos especificos, estamos estudando).

