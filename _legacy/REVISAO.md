# Revisão do portfólio de Mariana Bacelo

Data: 8 de outubro de 2026.

## Resultado

Revisão automatizada concluída nas sete páginas. Testadas duas formas de alojamento: raiz de domínio e subpasta de repositório. O conteúdo está pronto para transferência e revisão final no navegador.

| Item | Verificação |
| --- | --- |
| 151 botões | Todos associados a um fluxo; menu, perspectivas, imagens, zoom, fechar e setas testados em DOM |
| 117 links | Destinos internos e âncoras existentes; protocolo e sintaxe dos links externos verificados |
| 13 galerias | Setas, limites, estado de slide, teclado e arraste com mouse |
| 101 imagens dos cases | Integridade dos arquivos e ordem do inventário do UXfolio |
| Ampliação | Todas as imagens abrem; zoom alterna; fechar restaura foco e rolagem |
| Menu | Abrir, fechar ao escolher link e fechar com Escape |
| Portabilidade | HTML, CSS, fontes, imagens, CV e links dinâmicos funcionam com prefixo de repositório |
| Acessibilidade estrutural | IDs únicos, referências ARIA existentes e nomes dos botões |

## Correções desta revisão

- Removida uma opção duplicada do menu dos cases que levava à mesma seção.
- Períodos profissionais e do projeto de UX usam “to”, em vez de vírgulas deixadas pela retirada dos travessões.
- Corrigida a ativação pelo teclado de imagens após arrastar uma galeria.
- Links e arquivos passaram a usar caminhos relativos. Links das perspectivas calculam a raiz a partir do arquivo JavaScript, preservando o prefixo do repositório.
- Retirada da página Go-to-Market uma nota de revisão interna sobre uma métrica não utilizada. A página apresenta apenas os resultados documentados que foram mantidos.
- Imagens de capa dos cases carregam sem lazy loading; as demais continuam com carregamento diferido.

## Conferência de informação

Fontes: briefing completo anexado, CV de Service Design anexado, extração textual e inventário do UXfolio, e esclarecimentos de Mariana nesta conversa.

- Posicionamento principal: Senior Service Designer. Contratos atuais apresentados como independent contractor.
- AstraZeneca desde maio de 2026 e Instituto de Informática, I.P. desde maio de 2025; histórico anterior e idiomas conferidos com o CV.
- “10+ research activities” preserva a categoria do CV; não transforma atividades em 10 estudos distintos.
- KPI Monitoring e Product UX pertencem ao mesmo produto global de logística da Braskem. A ordem original é preservada dentro de cada frente.
- Customer Service Strategy é a frente da sede holandesa da Braskem; sua segmentação de clientes é distinta da segmentação de frequência de uso do produto.
- Logistics Business Alignment trata do estabelecimento de um novo negócio de logística ligado à Braskem; não apresenta crescimento comercial posterior como resultado medido.
- Go-to-Market é o projeto da consultoria, não da Braskem. O ano permanece omitido porque Mariana indicou 2024/2025 sem confirmação.
- NPS 40 para 78,2 e retenção de 50 a 55% são observações do programa, sem causalidade ou crédito individual atribuídos a uma intervenção.
- Inovação: cinco jornadas, 14 entrevistas e benchmarking de 35 players conferem com a fonte.
- CX: 12 meses, seis clusters e mais de 1.000 clientes processados mensalmente conferem com a fonte. O desenvolvimento técnico do K-Means é atribuído à equipe.
- Logística: 18 respostas à pesquisa, cinco dores comuns e pelo menos cinco testes por feature constam do case original.
- Workshop: oito horas, 14 participantes e duas frentes constam do case original.
- Não foram adicionados resultados, métricas finais das iniciativas atuais ou responsabilidades de gestão não comprovadas.
- As 101 imagens de conteúdo foram mantidas. Dezoito fundos decorativos de conclusão não foram incluídos.

## Limites e decisões pendentes

Os testes executam o JavaScript contra o DOM das páginas, com medidas de slides simuladas. Não houve teste visual em navegador real. Responsividade, sobreposição de elementos, gestos reais, comportamento de download e aparência no Safari/Chrome precisam da conferência final do proprietário. Escape do diálogo e abertura de detalhes usam comportamento nativo do navegador.

Links de LinkedIn e email correspondem ao CV. A disponibilidade do LinkedIn e o envio/recebimento de email não foram testados; o CV local está incluído e referenciado corretamente.

O pacote é estático e não possui autenticação. Conteúdo anteriormente restrito está incluído para transferência autorizada. Decidir o acesso antes de publicar o repositório ou os cases. O aviso de confidencialidade e o noindex existentes não são mecanismos de proteção.

A revisão confronta o conteúdo com as fontes fornecidas; não constitui verificação independente junto às empresas. Datas atuais, disponibilidade contratual e autorização de divulgação dos artefatos precisam permanecer sob revisão de Mariana.
