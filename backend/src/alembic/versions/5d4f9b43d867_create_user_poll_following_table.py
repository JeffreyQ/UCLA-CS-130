"""Create User Poll Following Table

Revision ID: 5d4f9b43d867
Revises: e963e80e9f26
Create Date: 2019-11-20 23:16:05.682072

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5d4f9b43d867'
down_revision = 'e963e80e9f26'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user_poll_following',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('poll_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['poll_id'], ['poll.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'poll_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user_poll_following')
    # ### end Alembic commands ###
