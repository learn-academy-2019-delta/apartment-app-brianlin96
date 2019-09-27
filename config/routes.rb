Rails.application.routes.draw do
  get '*path', to: 'pages#index', constraints: ->(request){ request.format.html? }
  resources :apartments
  root to: "pages#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
